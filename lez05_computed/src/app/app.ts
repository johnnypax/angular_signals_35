import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  todos = signal([
    {
      id: 1,
      title: "Study signals with Giovanni Pace",
      completed: true
    },
    {
      id: 2,
      title: "Create a project",
      completed: false
    },
    {
      id: 3,
      title: "Understand completed signals",
      completed: true
    },
  ])

  completedTodos = computed(() => {
    return this.todos().filter(t => t.completed).length
  })

  remainingTodos = computed(() => {
    return this.todos().filter(t => !t.completed).length
  })

  toggleTodo(varId: number): void{
    this.todos.update(lista => 
      lista.map(
        todo => todo.id == varId ? 
        {
          ...todo,
          completed: !todo.completed
        } : todo
      )
    )
  }
}
