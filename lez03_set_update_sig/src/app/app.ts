import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  counter = signal(0)
  list = signal(['Giovanni', 'Mario', 'Valeria'])
  
  increment() {
    // let contatore = this.counter() + 1;
    // this.counter.set(contatore);

    this.counter.update(value => value + 1)
  }
  decrement() {
    this.counter.update(value => {
      return value - 1
    })
  }
  reset(){
    this.counter.set(0)
  }

  aggiungi(){
    this.list.update(users => [
      ...users,
      'Anna'
    ])
  }

  remove(index: number){
    this.list.update(users => 
      users.filter((u, i) => i != index))
  }
}
