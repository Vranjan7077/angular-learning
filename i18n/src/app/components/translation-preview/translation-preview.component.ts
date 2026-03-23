import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-translation-preview',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardComponent],
  templateUrl: './translation-preview.component.html',
  styleUrl: './translation-preview.component.scss',
})
export class TranslationPreviewComponent {
  @Input() userName = '';
}
