import { NgModule } from '@angular/core';
import { PartialPickOmitComponent } from './partial-pick-omit.component';

const components = [PartialPickOmitComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class PartialPickOmitModule {}
