import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _movieService: MovieService,
    private _router: Router) { }

  id = '';

  ngOnInit() {
    this.editForm = this.formBuilder.group({
        titulo: ['', Validators.required],
        descricao: ['', Validators.required],
        genero: ['', Validators.required],
        paisOrigem: ['', Validators.required],
        anoLancamento: ['', Validators.required],
        lingua: ['', Validators.required],
        duracao: ['', Validators.required]
      });

      this.route.params.subscribe(params => {
        let id = params['id'];
        this.id = id;

      this._movieService.getById(id).subscribe(movie => {
          this.preencherDadosFilme(movie);
        });
      });
    }
    
    preencherDadosFilme(value) {
      this.editForm.patchValue({
        titulo: value.titulo,
        descricao: value.descricao,
        genero: value.genero,
        paisOrigem: value.paisOrigem,
        anoLancamento: value.anoLancamento,
        lingua: value.lingua,
        duracao: value.duracao,
      });
    }

    onSubmit() {
      this._movieService.updateById(this.id, this.editForm.value).subscribe(() => this._router.navigate(['filmes/']));
    }

}
