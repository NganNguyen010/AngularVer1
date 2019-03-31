import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { ServeyService } from '../servey.service';

@Component({
  selector: 'app-serveyform',
  templateUrl: './serveyform.component.html',
  styleUrls: ['./serveyform.component.css']
})
export class ServeyformComponent implements OnInit {
  formServey: FormGroup;
  submitted = false;
  listRecommened: () => string[];
  listImproved: () => string[];
  constructor(private serveyService: ServeyService) {
    this.formServey = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required]),
      role: new FormControl('', []),
      recommend: new FormControl('', [Validators.required]),
      likeFCC: new FormControl('', []),
      improved: new FormControl('', []),
      comment: new FormControl('', [])
    });
  }
  get valueOfControl() {
    return this.formServey.controls;
  }
  getRecommendSource() {
     this.listRecommened = this.serveyService.getRecommendSource;
  }
  getImprovedSource() {
     this.listImproved = this.serveyService.getImprovedSource;
  }
  onSubmit() {
    this.submitted = true;
    if (this.formServey.invalid) {
      return;
    }
  }
  ngOnInit() {
    this.getImprovedSource();
    this.getRecommendSource();
  }

}
