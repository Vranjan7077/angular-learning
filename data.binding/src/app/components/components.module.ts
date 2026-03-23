import { NgModule } from '@angular/core';
import { DbAsyncPipeComponent } from './db-async-pipe/db-async-pipe.component';
import { DbAttributeBindingComponent } from './db-attribute-binding/db-attribute-binding.component';
import { DbClassBindingComponent } from './db-class-binding/db-class-binding.component';
import { DbEventBindingComponent } from './db-event-binding/db-event-binding.component';
import { DbInterpolationComponent } from './db-interpolation/db-interpolation.component';
import { DbPipeBindingComponent } from './db-pipe-binding/db-pipe-binding.component';
import { DbPropertyBindingComponent } from './db-property-binding/db-property-binding.component';
import { DbSafeNavigationComponent } from './db-safe-navigation/db-safe-navigation.component';
import { DbSignalBindingComponent } from './db-signal-binding/db-signal-binding.component';
import { DbStyleBindingComponent } from './db-style-binding/db-style-binding.component';
import { DbTwoWayBindingComponent } from './db-two-way-binding/db-two-way-binding.component';

const components = [
  DbAsyncPipeComponent,
  DbAttributeBindingComponent,
  DbClassBindingComponent,
  DbEventBindingComponent,
  DbInterpolationComponent,
  DbPipeBindingComponent,
  DbPropertyBindingComponent,
  DbSafeNavigationComponent,
  DbSignalBindingComponent,
  DbStyleBindingComponent,
  DbTwoWayBindingComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class ComponentsModule {}
