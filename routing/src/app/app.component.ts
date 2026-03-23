import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "'repro.understanding.angular.routing";
  constructor(public router: Router) {}

  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }

  isUsersRoute(): boolean {
    return this.router.url.startsWith('/users');
  }
}
