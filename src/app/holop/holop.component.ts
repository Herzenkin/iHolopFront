import { Component, OnInit } from '@angular/core';
import { Holop } from '../holop';

@Component({
  selector: 'app-holop',
  templateUrl: './holop.component.html',
  styleUrls: ['./holop.component.css']
})
export class HolopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  holop: Holop = {
    id: 1,
    name: 'Johnny',
    master: 'Mr. Aaron',
    rentFrom: '2015/10/15',
    rentTo: '2018/10/16'
  };
}
