import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';
import { Serie } from '../models/serie';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SerieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getDiscover() {
    return this._httpClient.get(`${this.URL}series`)
  }

  getSeries() : Observable <Serie[]>{
    return this._httpClient.get<Serie[]>(`${this.URL}series`).pipe(
    map(res => res),
    catchError(err=>Observable.throw(err.message))
    )   
  }

  getById(id: string): Observable<Serie> {
    return this._httpClient.get<Serie>(`${this.URL}series/${id}`);
  }

  updateById(id: string, value) {
    return this._httpClient.put(`${this.URL}series/editar/${id}`,value);
  }

  deleteByID(id: string) {
    return this._httpClient.delete(`${this.URL}series/${id}`);
  }

}