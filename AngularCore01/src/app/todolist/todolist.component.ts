import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }
  @Input() listTodo: Todo[] = [];
  @Output() Remove = new EventEmitter();
  @Output() Complete = new EventEmitter();
  ngOnInit() {
  }
  returnIdCompleteToApp(id: number) {
    this.Complete.emit(id);
  }
  returnIdRemoveToApp(id: number) {
    this.Remove.emit(id);
  }

}
