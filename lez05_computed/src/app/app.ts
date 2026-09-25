import { Component, signal } from '@angular/core';
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

}
