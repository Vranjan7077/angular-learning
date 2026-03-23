import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiServiceService, ApiTodo } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-class-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-class-binding.component.html',
  styleUrl: './db-class-binding.component.scss',
})
export class DbClassBindingComponent {
  todos: ApiTodo[] = [];
  isLoading = true;
  errorMessage = '';
  highlightedTodoId: number | null = null;

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getTodos().subscribe({
      next: (todos) => {
        const pendingTodo = todos.find((todo) => !todo.completed);
        const completedTodo = todos.find((todo) => todo.completed);

        this.todos = [pendingTodo, completedTodo].filter(
          (todo): todo is ApiTodo => !!todo,
        );
        this.highlightedTodoId = this.todos[0]?.id ?? null;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load todo samples right now.';
        this.isLoading = false;
      },
    });
  }

  highlightTodo(todoId: number): void {
    this.highlightedTodoId = todoId;
  }
}
