import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { CrudUser } from './models/user-crud.model';
import { CrudTemplateDrivenService } from './services/crud-template-driven.service';

@Component({
  selector: 'app-understanding-crud-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './understanding-crud-template-driven.component.html',
  styleUrl: './understanding-crud-template-driven.component.scss',
})
export class UnderstandingCrudTemplateDrivenComponent implements OnInit {
  users: CrudUser[] = [];
  isEditing = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  formModel: CrudUser = this.createEmptyUser();

  constructor(private readonly crudService: CrudTemplateDrivenService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.crudService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage =
          'Could not load users. Make sure json-server is running on port 3000.';
        this.isLoading = false;
      },
    });
  }

  saveUser(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    if (this.isEditing && this.formModel.id != null) {
      this.crudService.updateUser(this.formModel).subscribe({
        next: () => {
          this.successMessage = 'User updated successfully.';
          this.afterSave(form);
        },
        error: () => {
          this.errorMessage = 'Update failed. Please try again.';
        },
      });
      return;
    }

    const payload: CrudUser = {
      name: this.formModel.name.trim(),
      email: this.formModel.email.trim(),
      role: this.formModel.role.trim(),
    };

    this.crudService.createUser(payload).subscribe({
      next: () => {
        this.successMessage = 'User created successfully.';
        this.afterSave(form);
      },
      error: () => {
        this.errorMessage = 'Create failed. Please try again.';
      },
    });
  }

  editUser(user: CrudUser): void {
    this.formModel = { ...user };
    this.isEditing = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  removeUser(user: CrudUser): void {
    if (user.id == null) {
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    this.crudService.deleteUser(user.id).subscribe({
      next: () => {
        if (this.formModel.id === user.id) {
          this.cancelEdit();
        }
        this.successMessage = 'User deleted successfully.';
        this.loadUsers();
      },
      error: () => {
        this.errorMessage = 'Delete failed. Please try again.';
      },
    });
  }

  cancelEdit(): void {
    this.formModel = this.createEmptyUser();
    this.isEditing = false;
  }

  private afterSave(form: NgForm): void {
    this.cancelEdit();
    form.resetForm(this.createEmptyUser());
    this.loadUsers();
  }

  private createEmptyUser(): CrudUser {
    return {
      name: '',
      email: '',
      role: '',
    };
  }
}
