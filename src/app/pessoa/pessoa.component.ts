import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private _pessoaService: PessoaService,
    private _router: Router) { }

  pessoas : Pessoa[];

  ngOnInit() {
    this._pessoaService.getPessoas().subscribe(
      response => {
        this.pessoas = response;
      })

  }

  goEdit(pessoa) {
    this._router.navigate(['pessoas/detalhes', pessoa.id])
  }

  getPessoaImage(pessoa: Pessoa) {
    if (pessoa.profile_path === 'null') {
      return "https://via.placeholder.com/250x141?text=%20";
    }

    return `https://image.tmdb.org/t/p/w250_and_h141_face${pessoa.profile_path}`;
  }
}
