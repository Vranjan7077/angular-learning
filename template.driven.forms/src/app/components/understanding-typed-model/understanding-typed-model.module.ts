import { NgModule } from '@angular/core';
import { UnderstandingTypedModelComponent } from './understanding-typed-model.component';

const components = [UnderstandingTypedModelComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingTypedModelModule {}
