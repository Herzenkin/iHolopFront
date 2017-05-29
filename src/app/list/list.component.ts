import { Component, OnInit } from '@angular/core';
import { Holop } from '../holop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  holops: Holop[];
  newHolop: Holop;

  constructor() { }

  ngOnInit() {
    this.holops = [{
      id: 1,
      name: 'Johnny',
      master: 'Mr. Aaron',
      rentFrom: '2015/10/15',
      rentTo: '2018/10/16'
    },
    {
      id: 2,
      name: 'Sam',
      master: 'Mr. Smith',
      rentFrom: '2014/10/18',
      rentTo: '2019/06/05'
    }];
    this.newHolop = new Holop();
  }

  add() {
    this.holops.push(this.newHolop);
    this.newHolop = new Holop();
  }

  delete(holop: Holop) {
    this.holops = this.holops.filter(h => h != holop);
  }
}
