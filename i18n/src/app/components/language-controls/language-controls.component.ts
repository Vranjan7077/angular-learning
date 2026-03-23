import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';

@Component({
  selector: 'app-language-controls',
  standalone: true,
  imports: [CommonModule, CardComponent, DropdownComponent],
  templateUrl: './language-controls.component.html',
  styleUrl: './language-controls.component.scss',
})
export class LanguageControlsComponent {
  @Input() userName = '';
  @Input() supportedLangs: string[] = [];
  @Input() currentLang = 'en';
  @Input() currentLanguageLabel = 'English';
  @Input() currentDirection = 'LTR';

  @Output() userNameChange = new EventEmitter<Event>();
  @Output() languageChange = new EventEmitter<string>();

  onNameInput(event: Event): void {
    this.userNameChange.emit(event);
  }

  onLanguageSelect(lang: string): void {
    this.languageChange.emit(lang);
  }
}
