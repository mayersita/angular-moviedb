import { AtuacaoElenco } from './../models/atuacao';
import { Component, OnInit, Input } from '@angular/core';
import { AtuacaoService } from './atuacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hub-atuacao-elenco',
  templateUrl: './atuacao-elenco.component.html',
  styleUrls: ['./atuacao-elenco.component.css']
})
export class AtuacaoElencoComponent implements OnInit {

  constructor(private _atuacaoService: AtuacaoService,
    private _router: Router) { }

  @Input() atuacao : AtuacaoElenco;

  ngOnInit() {
  }
  
  getPessoaImage(atuacao: AtuacaoElenco) {
    if (atuacao.pessoaImagem === 'null') {
      return "https://via.placeholder.com/250x141?text=%20";
    }

    return `https://image.tmdb.org/t/p/w250_and_h141_face${atuacao.pessoaImagem}`;
  }

}
