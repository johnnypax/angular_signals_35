import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-inserisci',
  styleUrl: './inserisci.css',
  templateUrl: './inserisci.html',
})
export class Inserisci {

  service = inject(TodoService)
  input_titolo?: string

  aggiungi(){
    if(this.input_titolo){
      this.service.addTodo(this.input_titolo)
      alert("STAPPOOOOOOOO")
      return;
    }

    alert("ERRORE")
  }

}
