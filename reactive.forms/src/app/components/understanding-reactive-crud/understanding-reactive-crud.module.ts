import { NgModule } from '@angular/core';
import { UnderstandingReactiveCrudComponent } from './understanding-reactive-crud.component';

const components = [UnderstandingReactiveCrudComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingReactiveCrudModule {}
