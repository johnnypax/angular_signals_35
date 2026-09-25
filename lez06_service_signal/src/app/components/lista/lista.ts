import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  imports: [],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {

  service = inject(TodoService);

  // constructor(private service: TodoService){}

}
