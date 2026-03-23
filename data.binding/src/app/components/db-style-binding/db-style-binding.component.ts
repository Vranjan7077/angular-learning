import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiServiceService, ApiTodo } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-style-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-style-binding.component.html',
  styleUrl: './db-style-binding.component.scss',
})
export class DbStyleBindingComponent {
  todos: ApiTodo[] = [];
  selectedIndex = 0;
  isLoading = true;
  errorMessage = '';

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getTodos().subscribe({
      next: (todos) => {
        const pendingTodo = todos.find((todo) => !todo.completed);
        const completedTodo = todos.find((todo) => todo.completed);

        this.todos = [pendingTodo, completedTodo].filter(
          (todo): todo is ApiTodo => !!todo,
        );
        this.selectedIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load style binding todo samples right now.';
        this.isLoading = false;
      },
    });
  }

  get selectedTodo(): ApiTodo | null {
    return this.todos[this.selectedIndex] ?? null;
  }

  selectTodo(index: number): void {
    this.selectedIndex = index;
  }

  getProgressWidth(todo: ApiTodo): number {
    return todo.completed ? 100 : 35;
  }

  getAccentColor(todo: ApiTodo): string {
    return todo.completed ? '#059669' : '#ea580c';
  }

  getCardBackground(todo: ApiTodo): string {
    return todo.completed
      ? 'linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%)'
      : 'linear-gradient(180deg, #fff7ed 0%, #ffedd5 100%)';
  }
}
