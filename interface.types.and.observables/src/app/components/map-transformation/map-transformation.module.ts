import { NgModule } from '@angular/core';
import { MapTransformationComponent } from './map-transformation.component';

const components = [MapTransformationComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class MapTransformationModule {}
