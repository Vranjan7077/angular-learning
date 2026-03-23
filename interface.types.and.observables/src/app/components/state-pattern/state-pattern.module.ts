import { NgModule } from '@angular/core';
import { StatePatternComponent } from './state-pattern.component';

const components = [StatePatternComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class StatePatternModule {}
