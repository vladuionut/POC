import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataModelService {

  constructor(private http: Http) { }

  getDataFromServer(phase: String) {
    return this.http
      .get(`http://localhost:3000/${phase}`)
      .map(response => response.json());
  }
  getCurrentPhaseTemplate(phaseid: String) {
    return this.http
      .get(`http://localhost:3000/${phaseid}_tpl.html`)
      .map(response => response.text());
  }
}
