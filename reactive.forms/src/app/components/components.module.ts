import { NgModule } from '@angular/core';
import { UnderstandingFormControlModule } from './understanding-form-control/understanding-form-control.module';
import { UnderstandingFormGroupModule } from './understanding-form-group/understanding-form-group.module';
import { UnderstandingFormSubmitModule } from './understanding-form-submit/understanding-form-submit.module';
import { UnderstandingFormValidatorsModule } from './understanding-form-validators/understanding-form-validators.module';
import { UnderstandingFormNestedGroupModule } from './understanding-form-nested-group/understanding-form-nested-group.module';
import { UnderstandingFormArrayModule } from './understanding-form-array/understanding-form-array.module';
import { UnderstandingFormCustomValidatorModule } from './understanding-form-custom-validator/understanding-form-custom-validator.module';
import { UnderstandingFormAsyncValidatorModule } from './understanding-form-async-validator/understanding-form-async-validator.module';
import { UnderstandingFormStrongTypingModule } from './understanding-form-strong-typing/understanding-form-strong-typing.module';
import { UnderstandingFormValueChangesModule } from './understanding-form-value-changes/understanding-form-value-changes.module';
import { UnderstandingFormConditionalValidationModule } from './understanding-form-conditional-validation/understanding-form-conditional-validation.module';
import { UnderstandingReactiveCrudModule } from './understanding-reactive-crud/understanding-reactive-crud.module';

const componentModules = [
  UnderstandingFormControlModule,
  UnderstandingFormGroupModule,
  UnderstandingFormSubmitModule,
  UnderstandingFormValidatorsModule,
  UnderstandingFormNestedGroupModule,
  UnderstandingFormArrayModule,
  UnderstandingFormCustomValidatorModule,
  UnderstandingFormAsyncValidatorModule,
  UnderstandingFormStrongTypingModule,
  UnderstandingFormValueChangesModule,
  UnderstandingFormConditionalValidationModule,
  UnderstandingReactiveCrudModule,
];

@NgModule({
  imports: [...componentModules],
  exports: [...componentModules],
})
export class ComponentsModule {}
