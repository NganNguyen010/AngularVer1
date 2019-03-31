import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() Delete = new EventEmitter();
  @Output() Status = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  returnIdDeleteToList(id: number) {
    this.Delete.emit(id);
  }
  returnIdStatusToList(id: number) {
    this.Status.emit(id);
  }
}
