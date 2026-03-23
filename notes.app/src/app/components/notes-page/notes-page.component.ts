import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { NotesFormComponent } from '../notes-form/notes-form.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { ToastComponent } from '../toast/toast.component';
import { Notes } from '../../interfaces/notes';
@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [
    CommonModule,
    NotesFormComponent,
    NotesListComponent,
    ToastComponent,
  ],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss',
})
export class NotesPageComponent {
  selectedNote!: Notes;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  get username(): string {
    return this.authService.getCurrentUser()?.username || 'User';
  }

  onEditNote(note: Notes): void {
    this.selectedNote = { ...note };
  }

  onFormSubmitted(): void {
    this.selectedNote = null!;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
