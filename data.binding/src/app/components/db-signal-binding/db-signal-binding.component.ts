import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ApiServiceService, ApiTodo } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-signal-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-signal-binding.component.html',
  styleUrl: './db-signal-binding.component.scss',
})
export class DbSignalBindingComponent {
  readonly todos = signal<ApiTodo[]>([]);
  readonly selectedStatus = signal<'all' | 'completed' | 'pending'>('all');
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');

  readonly filteredTodos = computed(() => {
    const filter = this.selectedStatus();
    const todos = this.todos();

    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === 'pending') {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  });

  readonly summary = computed(() => ({
    total: this.todos().length,
    completed: this.todos().filter((todo) => todo.completed).length,
    pending: this.todos().filter((todo) => !todo.completed).length,
  }));

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getTodos().subscribe({
      next: (todos) => {
        const pendingTodo = todos.find((todo) => !todo.completed);
        const completedTodo = todos.find((todo) => todo.completed);

        this.todos.set(
          [pendingTodo, completedTodo].filter((todo): todo is ApiTodo => !!todo),
        );
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load signal binding samples right now.');
        this.isLoading.set(false);
      },
    });
  }

  setStatusFilter(status: 'all' | 'completed' | 'pending'): void {
    this.selectedStatus.set(status);
  }
}
