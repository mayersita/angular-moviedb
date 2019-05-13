import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { AtuacaoService } from './../../atuacao/atuacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { AtuacaoElenco } from 'src/app/models/atuacao';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService,
    private _atuacaoService: AtuacaoService,
    private _router: Router) { }
 
  serie: Serie;
  elenco: AtuacaoElenco[];

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      forkJoin<Serie, AtuacaoElenco[]>(
        this._serieService.getById(id), 
        this._atuacaoService.getPorSerie(id)
      ).subscribe(
        ([serie, elenco]) => {
          this.serie = serie;
          this.elenco = elenco;
        }
      )

    });
  }
  goEdit(serie) {
    this._router.navigate(['series/editar', serie.id])
  }

  goDelete(id:string, titulo: string){
    if(confirm("Tem certeza que deseja excluir "+titulo +"?")){
      this._serieService.deleteByID(id).subscribe(() => this._router.navigate(['series/']));
    }
  }
}
