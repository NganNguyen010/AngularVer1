import { Component, OnInit } from '@angular/core';
import { MailServiceService } from 'src/app/mail-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messageheader',
  templateUrl: './messageheader.component.html',
  styleUrls: ['./messageheader.component.css']
})
export class MessageheaderComponent implements OnInit {
  constructor(private mailServie: MailServiceService, private acct: ActivatedRoute) {}
  ngOnInit() {
    this.acct.params.subscribe(({id}) => {
      this.mailServie.getAll(id);
    });
  }
}
