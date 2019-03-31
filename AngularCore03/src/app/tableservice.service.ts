import { Injectable } from '@angular/core';
import { EMPLOYEES } from './table/employee';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
  listemp = EMPLOYEES;
  constructor() { }
  getAll(){
    return this.listemp;
  }
}
