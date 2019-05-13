import { AtuacaoPessoa } from './../../models/atuacao';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atuacao-pessoa',
  templateUrl: './atuacao-pessoa.component.html',
  styleUrls: ['./atuacao-pessoa.component.css']
})
export class AtuacaoPessoaComponent implements OnInit {

  constructor() { }

  @Input() participacao : AtuacaoPessoa;

  ngOnInit() {
  }

}
