import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PhonepipePipe } from './phonepipe.pipe';
import { OrderModule } from 'ngx-order-pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PhonepipePipe,
  ],
  imports: [
    BrowserModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
