import { Component, Input } from '@angular/core';

import { PositionComponent } from '../../common/adcomp/position.component';

@Component({
  templateUrl: "./job-position.component.html",
  styleUrls: ['./job-position.component.css'],
})
export class JobPositionComponent implements PositionComponent {
  @Input() data: any;



}

