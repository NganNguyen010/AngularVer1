import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeyService {
  listImproved: string[];
  listRecommened: string[];
  constructor() {}
  recommendSource = ['Definitely', 'Maybe', 'Not sure'];
  improvedSource = [
    'Front-end Projects',
    'Back-end Projects',
    'Data Visualization',
    'Challenges',
    'Open Source Community',
    'Gitter help rooms',
    'Videos',
    'City Meetups',
    'Wiki',
    'Forum',
    'Additional Courses'
  ];
  getRecommendSource() {
    return this.recommendSource;
  }
  getImprovedSource() {
    return this.improvedSource;
  }
}
