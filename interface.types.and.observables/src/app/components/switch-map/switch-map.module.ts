import { NgModule } from '@angular/core';
import { SwitchMapComponent } from './switch-map.component';

const components = [SwitchMapComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class SwitchMapModule {}
