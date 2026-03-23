import { NgModule } from '@angular/core';
import { UnderstandingInputParentChildModule } from './understanding-input-parent-child/understanding-input-parent-child.module';
import { UnderstandingOutputChildParentModule } from './understanding-output-child-parent/understanding-output-child-parent.module';
import { UnderstandingTemplateReferenceModule } from './understanding-template-reference/understanding-template-reference.module';
import { UnderstandingViewChildModule } from './understanding-view-child/understanding-view-child.module';
import { UnderstandingContentProjectionModule } from './understanding-content-projection/understanding-content-projection.module';
import { UnderstandingSiblingCommunicationModule } from './understanding-sibling-communication/understanding-sibling-communication.module';
import { UnderstandingSharedServiceCommunicationModule } from './understanding-shared-service-communication/understanding-shared-service-communication.module';
import { UnderstandingBehaviorSubjectCommunicationModule } from './understanding-behaviorsubject-communication/understanding-behaviorsubject-communication.module';
import { UnderstandingSignalsCommunicationModule } from './understanding-signals-communication/understanding-signals-communication.module';
import { UnderstandingLiveApiCommunicationModule } from './understanding-live-api-communication/understanding-live-api-communication.module';

const componentModules = [
  UnderstandingInputParentChildModule,
  UnderstandingOutputChildParentModule,
  UnderstandingTemplateReferenceModule,
  UnderstandingViewChildModule,
  UnderstandingContentProjectionModule,
  UnderstandingSiblingCommunicationModule,
  UnderstandingSharedServiceCommunicationModule,
  UnderstandingBehaviorSubjectCommunicationModule,
  UnderstandingSignalsCommunicationModule,
  UnderstandingLiveApiCommunicationModule,
];

@NgModule({
  imports: [...componentModules],
  exports: [...componentModules],
})
export class ComponentsModule {}
