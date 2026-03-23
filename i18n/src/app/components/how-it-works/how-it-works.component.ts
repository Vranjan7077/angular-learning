import { Component, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  @Input() placeholderExample = '{{name}}';
  @Input() currentJsonPreview = '';
  @Input() templatePreview = '';
  @Input() resultPreview = '';
}
