import { NgModule } from '@angular/core';
import { AsyncPipeComponent } from './async-pipe.component';

const components = [AsyncPipeComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class AsyncPipeModule {}
