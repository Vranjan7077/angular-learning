import { NgModule } from '@angular/core';
import { UnderstandingPatternValidationsComponent } from './understanding-pattern-validations.component';

const components = [UnderstandingPatternValidationsComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingPatternValidationsModule {}
