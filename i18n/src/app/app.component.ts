import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { LanguageControlsComponent } from './components/language-controls/language-controls.component';
import { TranslationPreviewComponent } from './components/translation-preview/translation-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    TranslationPreviewComponent,
    LanguageControlsComponent,
    HowItWorksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Internationalization (i18n) with Json Data';
  subtitle =
    'This demo shows how ngx-translate reads language-specific JSON files, switches the UI text at runtime, and replaces placeholders like the user name inside translated messages.';
  supportedLangs = ['en', 'fr', 'es', 'de', 'hi', 'ar', 'zh'];
  userName = '';
  currentLang = 'en';

  readonly languageLabels: Record<string, string> = {
    en: 'English',
    fr: 'French',
    es: 'Spanish',
    de: 'German',
    hi: 'Hindi',
    ar: 'Arabic',
    zh: 'Chinese',
  };
  readonly translationSnippets: Record<
    string,
    { greeting: string; welcome: string }
  > = {
    en: {
      greeting: 'Hello world !!',
      welcome: 'Welcome, {{name}}!',
    },
    fr: {
      greeting: 'Bonjour le monde !!',
      welcome: 'Bienvenue, {{name}} !',
    },
    es: {
      greeting: 'Hola mundo !!',
      welcome: 'Bienvenido, {{name}}!',
    },
    de: {
      greeting: 'Hallo Welt !!',
      welcome: 'Willkommen, {{name}}!',
    },
    hi: {
      greeting: 'Namaste duniya !!',
      welcome: 'Swagat hai, {{name}}!',
    },
    ar: {
      greeting: 'Marhaban bil-alam !!',
      welcome: 'Marhaban, {{name}}!',
    },
    zh: {
      greeting: 'Ni hao shijie !!',
      welcome: 'Huan ying, {{name}}!',
    },
  };

  constructor(private translateService: TranslateService) {
    const browserLang = (navigator.language ?? 'en').split('-')[0];
    const lang = this.supportedLangs.includes(browserLang) ? browserLang : 'en';
    this.currentLang = lang;

    this.translateService.setFallbackLang('en');
    this.translateService.use(lang);
    this.updateDirection(lang);

    const savedName = localStorage.getItem('userName');
    if (savedName) {
      this.userName = savedName;
    }
  }

  switchLangDropdown(lang: string) {
    if (!this.supportedLangs.includes(lang)) return;
    this.currentLang = lang;
    this.translateService.use(lang);
    this.updateDirection(lang);
  }

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userName = input.value;
    localStorage.setItem('userName', this.userName);
  }

  get currentLanguageLabel(): string {
    return this.languageLabels[this.currentLang] ?? this.currentLang;
  }

  get currentDirection(): string {
    return this.currentLang === 'ar' ? 'RTL' : 'LTR';
  }

  get currentSnippet(): { greeting: string; welcome: string } {
    return (
      this.translationSnippets[this.currentLang] ??
      this.translationSnippets['en']
    );
  }

  get interpolationPreview(): string {
    return this.userName.trim() || 'Your name';
  }

  get placeholderExample(): string {
    return '{{name}}';
  }

  get currentJsonPreview(): string {
    return `{
  "greeting": "${this.currentSnippet.greeting}",
  "welcome": "${this.currentSnippet.welcome}"
}`;
  }

  get resultPreview(): string {
    return this.currentSnippet.welcome.replace(
      this.placeholderExample,
      this.interpolationPreview,
    );
  }

  private updateDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
