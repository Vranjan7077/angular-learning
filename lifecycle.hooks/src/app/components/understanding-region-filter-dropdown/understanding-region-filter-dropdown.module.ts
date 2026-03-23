import { NgModule } from '@angular/core';
import { UnderstandingRegionFilterDropdownComponent } from './understanding-region-filter-dropdown.component';

const components = [UnderstandingRegionFilterDropdownComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingRegionFilterDropdownModule {}
