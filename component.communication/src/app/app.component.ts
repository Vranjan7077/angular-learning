import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { UnderstandingLiveApiCommunicationComponent } from "./components/understanding-live-api-communication/understanding-live-api-communication.component";

@Component({
  selector: 'app-root',
  imports: [ComponentsModule, UnderstandingLiveApiCommunicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'repro.understanding.angular.component.communication';
}
