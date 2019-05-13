import { AtuacaoPessoa } from './../models/atuacao';
import { BaseService } from './../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AtuacaoElenco } from '../models/atuacao';

@Injectable()
export class AtuacaoService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getPorSerie(id: string): Observable<AtuacaoElenco[]>{
    return this._httpClient.get<AtuacaoElenco[]>(`${this.URL}atuacoes/serie/${id}`);
  }

  getPorFilme(id: string): Observable<AtuacaoElenco[]>{
    return this._httpClient.get<AtuacaoElenco[]>(`${this.URL}atuacoes/filme/${id}`);
  }

  getPorPessoa(id: string): Observable<AtuacaoPessoa[]>{
    return this._httpClient.get<AtuacaoPessoa[]>(`${this.URL}atuacoes/pessoa/${id}`);
  }

  
}
