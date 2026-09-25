import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Inserisci } from './components/inserisci/inserisci';

@Component({
  imports: [Lista, Inserisci],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
