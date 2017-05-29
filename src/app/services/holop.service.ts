import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Holop } from '../holop';

@Injectable()
export class HolopService {

  private store: BehaviorSubject<Holop[]> = new BehaviorSubject([]);
  public changes: Observable<Holop[]> = this.store.asObservable();

  constructor(
    private http: Http
  ) { }

  private url: string = '/app/holops';

  getAll() {
    this.http.get(this.url)
      .map((resp: Response) => resp.json().data)
      .subscribe((holops: Holop[]) => this.store.next(holops));
  }
}
