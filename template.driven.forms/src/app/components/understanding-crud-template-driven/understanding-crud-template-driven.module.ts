import { NgModule } from '@angular/core';
import { UnderstandingCrudTemplateDrivenComponent } from './understanding-crud-template-driven.component';

const components = [UnderstandingCrudTemplateDrivenComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingCrudTemplateDrivenModule {}
