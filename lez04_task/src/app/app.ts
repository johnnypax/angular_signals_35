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

  input_nome: string = "" 
  input_quantita: number = 0

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

  aggiungi(): void{
    const nuovo = {
      id: this.elenco().length + 1,
      nome: this.input_nome,
      quantita: this.input_quantita
    }

    this.elenco.update(products => [
      ...products,
      nuovo
    ])
  }

  incrementa(varId: number): void{
    this.elenco.update(lista => 
      lista.map(p => 
        p.id == varId ? 
        { 
          ...p,
          quantita: p.quantita + 1
        } : p
      )
    )
  }


}
