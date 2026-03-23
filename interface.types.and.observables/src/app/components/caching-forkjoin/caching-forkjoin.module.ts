import { NgModule } from '@angular/core';
import { CachingForkjoinComponent } from './caching-forkjoin.component';

const components = [CachingForkjoinComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class CachingForkjoinModule {}
