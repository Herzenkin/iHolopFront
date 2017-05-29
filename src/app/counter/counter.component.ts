import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Holop } from '../holop';
import { HolopService } from '../services/holop.service';

@Component({
  selector: 'app-counter',
  template: `
    <h2><strong>Total number of holops: {{counter | async}}</strong></h2>
  `,
  // templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: Observable<number>;

  constructor(
    private holopService: HolopService
  ) { }

  ngOnInit() {
    this.counter = this.holopService.changes
      .map((holops: Holop[]) => holops.length);
  }

}
