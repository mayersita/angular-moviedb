import { BaseService } from './../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable()
export class PessoaService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getPessoas() : Observable <Pessoa[]>{
    return this._httpClient.get<Pessoa[]>(`${this.URL}pessoas`).pipe(
    map(res => res),
    catchError(err=>Observable.throw(err.message))
    )
  }

  getById(id: string): Observable<Pessoa> {
    return this._httpClient.get<Pessoa>(`${this.URL}pessoas/${id}`);
  }

  updateById(id: string, value) {
    return this._httpClient.put(`${this.URL}pessoas/editar/${id}`,value);    
  }

  deleteByID(id: string) {
    return this._httpClient.delete(`${this.URL}pessoas/${id}`);
  }

}
