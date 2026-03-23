import { NgModule } from '@angular/core';
import { UnderstandingTemplateReferenceComponent } from './understanding-template-reference.component';

const components = [UnderstandingTemplateReferenceComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingTemplateReferenceModule {}
