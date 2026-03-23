import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { CachingForkjoinComponent } from "./components/caching-forkjoin/caching-forkjoin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsModule, CachingForkjoinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Interface Types and Observables Demo';
}
