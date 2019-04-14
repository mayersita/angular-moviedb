import { SerieService } from './../serie/serie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  testenome = '';
  testeDescricao = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _movieService: MovieService,
    private _serieService: SerieService) { }

  id = '';
  type = '';

  ngOnInit() {
    
    this.editForm = this.formBuilder.group({
      filme: ['', Validators.required],
      descricao: ['', Validators.required],
      genero: ['', Validators.required],
      produtora: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      let id = params['id'];
      let type = params['type'];
      this.id = id;
      this.type = type;

      if (type === 'filme') {
        this._movieService.getById(id).subscribe(movie => {
          this.preencherDados(movie);
        });
      } else {
        this._serieService.getById(id).subscribe(serie => {
          this.preencherDados(serie);
        });
      }
    });
  }

  preencherDados(value) {
    this.editForm.patchValue({
      filme: value.name || value.title,
      descricao: value.overview,
      genero: value.genres.map(genre => genre.name).join(', '),
      produtora: value.production_companies.map(companies => companies.name).join(', ')
    });
  }

  onSubmit() {
    if (this.type === 'filme') {
      this._movieService.updateById(this.id, this.editForm.value);
    } else {
      this._serieService.updateById(this.id, this.editForm.value);
    }
  }
}
