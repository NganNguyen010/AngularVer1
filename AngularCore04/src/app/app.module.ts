import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { DetailComponent } from './detail/detail.component';
import { MailServiceService } from './mail-service.service';
import { RouterModule } from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '/:id', component: MessageComponent,
      children: [{ path: '/:id', component: DetailComponent }]
    }])
  ],
  providers: [MailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
