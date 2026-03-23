import { NgModule } from '@angular/core';
import { UnderstandingCustomValidationsComponent } from './understanding-custom-validations.component';

const components = [UnderstandingCustomValidationsComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingCustomValidationsModule {}
