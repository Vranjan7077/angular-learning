import { Component } from '@angular/core';
import { UnderstandingContentProjectionCardComponent } from './card/card.component';

@Component({
  selector: 'app-understanding-content-projection',
  standalone: true,
  imports: [UnderstandingContentProjectionCardComponent],
  templateUrl: './understanding-content-projection.component.html',
  styleUrl: './understanding-content-projection.component.scss',
})
export class UnderstandingContentProjectionComponent {}
