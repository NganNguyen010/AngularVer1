import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { DetailComponent } from './detail/detail.component';
import { MailServiceService } from './mail-service.service';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './header/contact/contact.component';
import { ReferencesComponent } from './header/references/references.component';
import { MessageheaderComponent } from './header/messageheader/messageheader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageComponent,
    DetailComponent,
    ContactComponent,
    ReferencesComponent,
    MessageheaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'MessageHeader',
        component: MessageComponent,
        children: [
          {
            path: ':id',
            component: MessageheaderComponent,
            children: [{ path: ':id', component: DetailComponent }]
          }
        ]
      },
      {
        path: 'Contacts',
        component: ContactComponent,
        children: [{ path: ':id', component: DetailComponent }]
      },
      {
        path: 'Preferences',
        component: ReferencesComponent,
        children: [{ path: ':id', component: DetailComponent }]
      }
    ])
  ],
  providers: [MailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
