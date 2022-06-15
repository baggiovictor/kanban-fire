import { Component } from '@angular/core';
import { Task } from './task/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: 'Comprar leite',
      description: 'Ir ao mercado comprar leite'
    },
    {
      title: 'Desenvolver o kanban',
      description: 'Usar firebase como banco de dados do kanban '
    }
  ]
}
