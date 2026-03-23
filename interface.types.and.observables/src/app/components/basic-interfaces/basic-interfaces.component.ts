import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-basic-interfaces',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './basic-interfaces.component.html',
  styleUrl: './basic-interfaces.component.scss',
})
export class BasicInterfacesComponent {
  private userService = inject(UserService);

  user$: Observable<User> = this.userService.getUser(1);
}
