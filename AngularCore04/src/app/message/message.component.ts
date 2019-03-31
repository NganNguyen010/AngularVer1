import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageItem=['inbox','finance','travel','personal','spam','drafts','sent']
  constructor() { }

  ngOnInit() {
  }

}
