import { NgModule } from '@angular/core';
import { HttpObservableComponent } from './http-observable.component';

const components = [HttpObservableComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class HttpObservableModule {}
