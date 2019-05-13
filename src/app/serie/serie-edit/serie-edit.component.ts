import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _serieService: SerieService,
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
      duracao: ['', Validators.required],
      temporadas: ['',Validators.required]
    });

    this.route.params.subscribe(params => {
      let id = params['id'];
      this.id = id;

    this._serieService.getById(id).subscribe(serie => {
        this.preencherDadosSerie(serie);
      });
    });

  }
  preencherDadosSerie(value) {
    this.editForm.patchValue({
      titulo: value.titulo,
      descricao: value.sinopse,
      genero: value.genero,
      paisOrigem: value.paisOrigem,
      anoLancamento: value.anoLancamento,
      lingua: value.lingua,
      duracao: value.duracao,
      temporadas: value.temporadas
    });
  }

  onSubmit() {
    this._serieService.updateById(this.id, this.editForm.value).subscribe(() => this._router.navigate(['series/']));
  }

}
