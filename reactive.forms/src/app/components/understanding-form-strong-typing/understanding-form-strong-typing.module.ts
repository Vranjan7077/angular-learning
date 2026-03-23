import { NgModule } from '@angular/core';
import { UnderstandingFormStrongTypingComponent } from './understanding-form-strong-typing.component';

const components = [UnderstandingFormStrongTypingComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormStrongTypingModule {}
