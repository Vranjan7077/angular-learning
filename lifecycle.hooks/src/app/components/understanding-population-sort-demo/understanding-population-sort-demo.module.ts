import { NgModule } from '@angular/core';
import { UnderstandingPopulationSortDemoComponent } from './understanding-population-sort-demo.component';

const components = [UnderstandingPopulationSortDemoComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingPopulationSortDemoModule {}
