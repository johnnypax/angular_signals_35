import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  elenco = signal(
    [
      {
        id: 1,
        nome: "Mouse",
        quantita: 5
      },
      {
        id: 2,
        nome: "Notebook",
        quantita: 3
      },
    ]
  )



}
