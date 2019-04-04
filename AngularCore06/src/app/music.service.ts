import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  data;
  dataTrack;
  id;
  constructor(private httpClient: HttpClient) { }
  getDetail(name: string) {
    let params = new HttpParams();
    params = params.append('q', name);
    params = params.append('type', 'artist');
    return this.httpClient.get(`https://api.spotify.com/v1/search`, { params }).subscribe(data => {
      this.data = data;
    });
  }
  getTracks(id: string) {
    return this.httpClient.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=VN`).subscribe(data => {
      this.dataTrack = data;
    });
  }
}
