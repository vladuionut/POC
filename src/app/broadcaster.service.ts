import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: any;
  data?: any;
}
@Injectable()
export class BroadcasterService {
  private _eventBus: EventEmitter<BroadcastEvent>;
  constructor() {
    this._eventBus = new EventEmitter<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this._eventBus.emit({ key, data });
  }

  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }
}
