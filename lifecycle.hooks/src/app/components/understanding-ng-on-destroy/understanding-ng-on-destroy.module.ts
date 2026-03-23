import { NgModule } from '@angular/core';
import { UnderstandingNgOnDestroyComponent } from './understanding-ng-on-destroy.component';

const components = [UnderstandingNgOnDestroyComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgOnDestroyModule {}
