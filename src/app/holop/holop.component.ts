import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() holop: Holop;
  @Output() deleteHolop: EventEmitter<any> = new EventEmitter();

  delete() {
    this.deleteHolop.emit();
  }
}
