import { Filme } from './../../models/filme';
import { AtuacaoService } from './../../atuacao/atuacao.service';
import { MovieService } from '../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AtuacaoElenco } from 'src/app/models/atuacao';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService, 
    private _atuacaoService: AtuacaoService,
    private _router: Router) { }
    
  movie: Filme;
  elenco: AtuacaoElenco[] = [];

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      forkJoin<Filme, AtuacaoElenco[]>(
        this._movieService.getById(id), 
        this._atuacaoService.getPorFilme(id)
      ).subscribe(
        ([movie, elenco]) => {
          this.movie = movie;
          this.elenco = elenco;
        }
      )
    });
  }

  goEdit(movie) {
    this._router.navigate(['filmes/editar', movie.id])
  }
  
  goDelete(id:string, titulo: string){
    if(confirm("Tem certeza que deseja excluir "+ titulo +"?")){
      this._movieService.deleteByID(id).subscribe(() => this._router.navigate(['filmes/']));
    }    
  }

}
