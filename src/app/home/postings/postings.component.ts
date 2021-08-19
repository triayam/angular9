import { Component, OnInit } from '@angular/core';

import { PositionService } from '../advert/position-service';
import { PositionItem } from '../../common/adcomp/position-item';

@Component({
  selector: 'app-posting',
  template: `
    <div>
      <app-job-banner [jobs]="posts"></app-job-banner>
    </div>
  `
})
export class PostingsComponent implements OnInit {
  posts: PositionItem[];

  constructor(private positingsService: PositionService) {}

  ngOnInit() {
    this.posts = this.positingsService.getPositions();
  }
}

