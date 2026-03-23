import { NgModule } from '@angular/core';
import { UnderstandingNgFormModule } from './understanding-ng-form/understanding-ng-form.module';
import { UnderstandingNgModelModule } from './understanding-ng-model/understanding-ng-model.module';
import { UnderstandingPatternValidationsModule } from './understanding-pattern-validations/understanding-pattern-validations.module';
import { UnderstandingRequiredValidationsModule } from './understanding-required-validations/understanding-required-validations.module';
import { UnderstandingSubmitModule } from './understanding-submit/understanding-submit.module';
import { UnderstandingCustomValidationsModule } from './understanding-custom-validations/understanding-custom-validations.module';
import { UnderstandingNgModelGroupModule } from './understanding-ng-model-group/understanding-ng-model-group.module';
import { UnderstandingDisablingModule } from './understanding-disabling/understanding-disabling.module';
import { UnderstandingTypedModelModule } from './understanding-typed-model/understanding-typed-model.module';
import { UnderstandingResetModule } from './understanding-reset/understanding-reset.module';
import { UnderstandingCrudTemplateDrivenModule } from './understanding-crud-template-driven/understanding-crud-template-driven.module';

const componentModules = [
  UnderstandingNgFormModule,
  UnderstandingNgModelModule,
  UnderstandingPatternValidationsModule,
  UnderstandingRequiredValidationsModule,
  UnderstandingSubmitModule,
  UnderstandingCustomValidationsModule,
  UnderstandingNgModelGroupModule,
  UnderstandingDisablingModule,
  UnderstandingTypedModelModule,
  UnderstandingResetModule,
  UnderstandingCrudTemplateDrivenModule,
];

@NgModule({
  imports: [...componentModules],
  exports: [...componentModules],
})
export class ComponentsModule {}
