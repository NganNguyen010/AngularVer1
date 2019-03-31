import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { ItemComponent } from './item/item.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoinputComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
