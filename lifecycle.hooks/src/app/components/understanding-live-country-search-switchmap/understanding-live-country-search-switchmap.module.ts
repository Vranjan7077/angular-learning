import { NgModule } from '@angular/core';
import { UnderstandingLiveCountrySearchSwitchmapComponent } from './understanding-live-country-search-switchmap.component';

const components = [UnderstandingLiveCountrySearchSwitchmapComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingLiveCountrySearchSwitchmapModule {}
