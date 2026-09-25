import { Service, signal } from '@angular/core';
import { Todo } from '../types/Todo';

@Service()
export class TodoService {

    todoList = signal<Todo[]>([
        {
            id: 1,
            title: "Study signals with Giovanni Pace",
            completed: false
        },
        {
            id: 2,
            title: "Make exercises",
            completed: true
        },
        {
            id: 3,
            title: "Read books",
            completed: true
        },
    ])

}
