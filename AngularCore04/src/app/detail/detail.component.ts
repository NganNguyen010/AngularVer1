import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(
    private mailService: MailServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => {
      this.mailService.getDetail(x.id);
    });
  }
}
