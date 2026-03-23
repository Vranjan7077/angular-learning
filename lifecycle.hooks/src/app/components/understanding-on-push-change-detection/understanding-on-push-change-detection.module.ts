import { NgModule } from '@angular/core';
import { UnderstandingOnPushChangeDetectionComponent } from './understanding-on-push-change-detection.component';

const components = [UnderstandingOnPushChangeDetectionComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingOnPushChangeDetectionModule {}
