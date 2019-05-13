import { AtuacaoService } from './../../atuacao/atuacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';
import { AtuacaoPessoa } from 'src/app/models/atuacao';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _pessoaService: PessoaService,
    private _atuacaoService: AtuacaoService,
    private _router: Router) { }

  pessoa: Pessoa;
  participacoes: AtuacaoPessoa[];

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
  
      forkJoin<Pessoa, AtuacaoPessoa[]>(
        this._pessoaService.getById(id), 
        this._atuacaoService.getPorPessoa(id)
      ).subscribe(
        ([pessoa, participacao]) => {
          this.pessoa = pessoa;
          this.participacoes = participacao;
        }
      )
    });
  }

  getPessoaImage(pessoa: Pessoa) {
    if (pessoa.profile_path === 'null') {
      return "https://via.placeholder.com/250x141?text=%20";
    }

    return `https://image.tmdb.org/t/p/w250_and_h141_face${pessoa.profile_path}`;
  }

  
  goEdit(pessoa) {
    this._router.navigate(['pessoas/editar', pessoa.id])
  }
  
  goDelete(id:string, nome: string){
    if(confirm("Tem certeza que deseja excluir "+ nome +"?")){
      this._pessoaService.deleteByID(id).subscribe(() => this._router.navigate(['pessoas/']));
    }
  }

}
