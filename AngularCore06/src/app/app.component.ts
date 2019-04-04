import { Component } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id;
  table = false;
  content = false;
  constructor(private musicService: MusicService) {}
  onEnter(name: string) {
    if (name !== '') {
      this.musicService.getDetail(name);
      this.table = false;
      this.content = true;
    } else {
      return;
    }
  }
  onClickImg(id: string) {
    this.musicService.getTracks(id);
    this.table = true;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {}
}
