import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-model',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './understanding-ng-model.component.html',
  styleUrl: './understanding-ng-model.component.scss',
})
export class UnderstandingNgModelComponent {
  name: string = '';
}
