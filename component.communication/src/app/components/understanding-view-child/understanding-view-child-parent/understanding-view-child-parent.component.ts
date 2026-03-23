import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingViewChildComponent } from '../understanding-view-child-child/understanding-view-child-child.component';

@Component({
  selector: 'app-understanding-view-child-parent',
  standalone: true,
  imports: [CardComponent, UnderstandingViewChildComponent],
  templateUrl: './understanding-view-child-parent.component.html',
  styleUrl: './understanding-view-child-parent.component.scss',
})
export class UnderstandingViewChildParentComponent {
  @ViewChild(UnderstandingViewChildComponent)
  child!: UnderstandingViewChildComponent;

  callChild() {
    this.child.sayHello();
  }
}
