import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCore01';
  listTodo: Todo[] = [];
  addTodo($event) {
    const item: Todo = {
      id: new Date().getMilliseconds(),
      name: $event.target.value,
      status: false
    };
    this.listTodo.push(item);
  }
  completeTodo(id: number) {
    const data = this.listTodo.find(todo => todo.id === id);
    data.status = !data.status;
  }
  deleteTodo(id: number) {
    this.listTodo = this.listTodo.filter(todo => todo.id !== id);
  }
}
