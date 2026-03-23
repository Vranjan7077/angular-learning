import { NgModule } from '@angular/core';
import { BasicInterfacesComponent } from './basic-interfaces.component';

const components = [BasicInterfacesComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class BasicInterfacesModule {}
