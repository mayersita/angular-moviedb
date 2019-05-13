import { BaseService } from '../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Filme } from '../models/filme';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  
  getDiscover() {
    return this._httpClient.get(`${this.URL}filmes`);
  }

  getMovies() : Observable <Filme[]>{
    return this._httpClient.get<Filme[]>(`${this.URL}filmes`).pipe(
    map(res => res),
    catchError(err=>Observable.throw(err.message))
    )   
  }

  getById(id: string): Observable <Filme> {
    return this._httpClient.get<Filme>(`${this.URL}filmes/${id}`);
  }

  updateById(id: string, value) {
    return this._httpClient.put(`${this.URL}filmes/editar/${id}`,value);    
  }

  deleteByID(id: string) {
    return this._httpClient.delete(`${this.URL}filmes/${id}`);
  }

  search(texto:string): Observable <Filme[]>{
    return this._httpClient.get<Filme[]>(`${this.URL}filmes/a/1,${JSON.stringify(texto)}`);
  }
  

}
