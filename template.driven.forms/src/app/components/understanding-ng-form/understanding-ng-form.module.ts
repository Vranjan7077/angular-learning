import { NgModule } from '@angular/core';
import { UnderstandingNgFormComponent } from './understanding-ng-form.component';

const components = [UnderstandingNgFormComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgFormModule {}
