import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Holop } from '../holop';

@Injectable()
export class HolopService {

  constructor(
    private http: Http
  ) { }
  
}
