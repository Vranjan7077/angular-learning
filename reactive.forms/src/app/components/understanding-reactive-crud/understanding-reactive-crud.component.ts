import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { CrudUser } from './models/crud-user.model';
import { ReactiveCrudService } from './services/reactive-crud.service';

@Component({
  selector: 'app-understanding-reactive-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardComponent],
  templateUrl: './understanding-reactive-crud.component.html',
  styleUrl: './understanding-reactive-crud.component.scss',
})
export class UnderstandingReactiveCrudComponent implements OnInit {
  readonly userFormGroup = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    role: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  users: CrudUser[] = [];
  editingId: number | null = null;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private readonly crudService: ReactiveCrudService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  get isEditing(): boolean {
    return this.editingId !== null;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  get formModel(): { name: string; email: string; role: string } {
    return this.userFormGroup.getRawValue();
  }

  get nameControl(): FormControl<string> {
    return this.userFormGroup.controls.name;
  }

  get emailControl(): FormControl<string> {
    return this.userFormGroup.controls.email;
  }

  get roleControl(): FormControl<string> {
    return this.userFormGroup.controls.role;
  }

  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.crudService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          'Could not connect to json-server. Run: npx json-server --watch db.json --port 3000';
      },
    });
  }

  saveUser(): void {
    if (this.userFormGroup.invalid) {
      this.userFormGroup.markAllAsTouched();
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    const payload = this.userFormGroup.getRawValue();

    if (!this.isEditing) {
      this.createUser(payload);
      return;
    }

    this.updateUser({ id: this.editingId ?? undefined, ...payload });
  }

  editUser(user: CrudUser): void {
    this.editingId = user.id ?? null;
    this.userFormGroup.setValue({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  removeUser(user: CrudUser): void {
    if (!user.id) {
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    this.crudService.deleteUser(user.id).subscribe({
      next: () => {
        this.successMessage = `Deleted user: ${user.name}`;
        this.loadUsers();
      },
      error: () => {
        this.errorMessage = 'Delete failed. Ensure json-server is running.';
      },
    });
  }

  cancelEdit(): void {
    this.editingId = null;
    this.userFormGroup.reset({
      name: '',
      email: '',
      role: '',
    });
  }

  trackByUserId(index: number, user: CrudUser): number {
    return user.id ?? index;
  }

  private createUser(payload: Omit<CrudUser, 'id'>): void {
    this.crudService.createUser(payload).subscribe({
      next: (createdUser) => {
        this.successMessage = `Created user: ${createdUser.name}`;
        this.cancelEdit();
        this.loadUsers();
      },
      error: () => {
        this.errorMessage = 'Create failed. Ensure json-server is running.';
      },
    });
  }

  private updateUser(payload: CrudUser): void {
    this.crudService.updateUser(payload).subscribe({
      next: (updatedUser) => {
        this.successMessage = `Updated user: ${updatedUser.name}`;
        this.cancelEdit();
        this.loadUsers();
      },
      error: () => {
        this.errorMessage = 'Update failed. Ensure json-server is running.';
      },
    });
  }
}
