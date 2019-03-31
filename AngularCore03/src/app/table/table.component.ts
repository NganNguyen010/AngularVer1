import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  listem: { id: number; firstName: string; lastName: string; email: string; gender: string; birthday: string; salary: number; phone: string; }[];
  order = 'id';
  reverse = false;
  sortedCollection: any[];
  constructor(private tableService: TableserviceService, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.listem, this.order);
  }
  getAll() {
    this.listem = this.tableService.getAll();
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
  ngOnInit() {
    this.getAll();
  }

}
