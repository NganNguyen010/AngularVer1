import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messageFilter: any;
  paramURL: string;
  messageItem = [
    'inbox',
    'finance',
    'travel',
    'personal',
    'spam',
    'drafts',
    'sent'
  ];
  // tslint:disable-next-line:max-line-length
  constructor(
  ) {}
  ngOnInit() {
  }
}
