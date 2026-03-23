import { NgModule } from '@angular/core';
import { GenericApiResponseComponent } from './generic-api-response.component';

const components = [GenericApiResponseComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class GenericApiResponseModule {}
