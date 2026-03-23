import { NgModule } from '@angular/core';
import { UnderstandingNgOnInitModule } from './understanding-ng-on-init/understanding-ng-on-init.module';
import { UnderstandingNgOnChangesModule } from './understanding-ng-on-changes/understanding-ng-on-changes.module';
import { UnderstandingNgDoCheckModule } from './understanding-ng-do-check/understanding-ng-do-check.module';
import { UnderstandingNgAfterContentInitModule } from './understanding-ng-after-content-init/understanding-ng-after-content-init.module';
import { UnderstandingNgAfterContentCheckedModule } from './understanding-ng-after-content-checked/understanding-ng-after-content-checked.module';
import { UnderstandingNgAfterViewInitModule } from './understanding-ng-after-view-init/understanding-ng-after-view-init.module';
import { UnderstandingNgAfterViewCheckedModule } from './understanding-ng-after-view-checked/understanding-ng-after-view-checked.module';
import { UnderstandingNgOnDestroyModule } from './understanding-ng-on-destroy/understanding-ng-on-destroy.module';
import { UnderstandingOnPushChangeDetectionModule } from './understanding-on-push-change-detection/understanding-on-push-change-detection.module';
import { UnderstandingSignalsRestIntegrationModule } from './understanding-signals-rest-integration/understanding-signals-rest-integration.module';
import { UnderstandingLifecycleLoggerPanelModule } from './understanding-lifecycle-logger-panel/understanding-lifecycle-logger-panel.module';
import { UnderstandingPopulationSortDemoModule } from './understanding-population-sort-demo/understanding-population-sort-demo.module';
import { UnderstandingLiveCountrySearchSwitchmapModule } from './understanding-live-country-search-switchmap/understanding-live-country-search-switchmap.module';
import { UnderstandingRegionFilterDropdownModule } from './understanding-region-filter-dropdown/understanding-region-filter-dropdown.module';

const componentModules = [
  UnderstandingNgOnInitModule,
  UnderstandingNgOnChangesModule,
  UnderstandingNgDoCheckModule,
  UnderstandingNgAfterContentInitModule,
  UnderstandingNgAfterContentCheckedModule,
  UnderstandingNgAfterViewInitModule,
  UnderstandingNgAfterViewCheckedModule,
  UnderstandingNgOnDestroyModule,
  UnderstandingOnPushChangeDetectionModule,
  UnderstandingSignalsRestIntegrationModule,
  UnderstandingLifecycleLoggerPanelModule,
  UnderstandingPopulationSortDemoModule,
  UnderstandingLiveCountrySearchSwitchmapModule,
  UnderstandingRegionFilterDropdownModule,
];

@NgModule({
  imports: [...componentModules],
  exports: [...componentModules],
})
export class ComponentsModule {}
