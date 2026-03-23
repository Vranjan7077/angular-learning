import { NgModule } from '@angular/core';
import { BasicInterfacesModule } from './basic-interfaces/basic-interfaces.module';
import { HttpObservableModule } from './http-observable/http-observable.module';
import { AsyncPipeModule } from './async-pipe/async-pipe.module';
import { SwitchMapModule } from './switch-map/switch-map.module';
import { GenericApiResponseModule } from './generic-api-response/generic-api-response.module';
import { MapTransformationModule } from './map-transformation/map-transformation.module';
import { PartialPickOmitModule } from './partial-pick-omit/partial-pick-omit.module';
import { StatePatternModule } from './state-pattern/state-pattern.module';
import { CachingForkjoinModule } from './caching-forkjoin/caching-forkjoin.module';

const componentsModules = [
  BasicInterfacesModule,
  HttpObservableModule,
  AsyncPipeModule,
  SwitchMapModule,
  GenericApiResponseModule,
  MapTransformationModule,
  PartialPickOmitModule,
  StatePatternModule,
  CachingForkjoinModule,
];

@NgModule({
  imports: [...componentsModules],
  exports: [...componentsModules],
})
export class ComponentsModule {}
