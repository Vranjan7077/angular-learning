import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-understanding-view-child',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-view-child-child.component.html',
  styleUrl: './understanding-view-child-child.component.scss',
})
export class UnderstandingViewChildComponent {
  sayHello() {
    alert('Hello from Child');
  }
}
