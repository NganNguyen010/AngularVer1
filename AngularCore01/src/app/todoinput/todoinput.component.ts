import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})
export class TodoinputComponent implements OnInit {

  constructor() { }
  @Output() todoName = new EventEmitter();
  ngOnInit() {
  }
  insert($event) {
      this.todoName.emit($event);
      $event.target.value = ' ';
  }
}
