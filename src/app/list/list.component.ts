import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Holop } from '../holop';
import { HolopService } from '../services/holop.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  holops: Observable<Holop[]>;
  newHolop: Holop;

  constructor(
    private holopService: HolopService
  ) { }

  ngOnInit() {
    this.holops = this.holopService.changes;
    this.holopService.getAll();
    this.newHolop = new Holop();
  }

  add() {
    // this.holops.push(this.newHolop);
    this.newHolop = new Holop();
  }

  delete(holop: Holop) {
    // this.holops = this.holops.filter(h => h != holop);
  }
}
