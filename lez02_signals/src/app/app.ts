import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  titolo = signal("Angular signals base")

  counter = signal(0)
  username = signal("Giovanni")
  isLogged = signal(false)

  user = signal(
    {
      nome: "Giovanni",
      eta: 39
    }
  )

  login() {
    this.isLogged.set(true);
  }

  logout() {
    this.isLogged.set(false);
  }

  changeUser() {
    this.user.set(
      {
        nome: "Valeria",
        eta: 89
      }
    )
  }

}
