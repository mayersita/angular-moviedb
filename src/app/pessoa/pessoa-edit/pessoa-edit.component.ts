import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _pessoaService: PessoaService,
    private _router: Router) { }

  id = '';

  ngOnInit() {

    this.editForm = this.formBuilder.group({

        nome: ['',Validators.required],
        cidadeNatal: ['',Validators.required],
        genero: ['',Validators.required],
        tipoPessoa: ['',Validators.required],
        altura: ['',Validators.required]

    });

    this.route.params.subscribe(params => {
      let id = params['id'];
      this.id = id;

    this._pessoaService.getById(id).subscribe(pessoa => {
        this.preencherDadosPessoa(pessoa);
      });
    });

  }

  preencherDadosPessoa(value){
    this.editForm.patchValue({
      nome: value.nome,
      cidadeNatal: value.cidadeNatal,
      genero: value.genero,
      tipoPessoa: value.tipoPessoa,
      altura: value.altura
    });
  }

  onSubmit() {
    this._pessoaService.updateById(this.id, this.editForm.value).subscribe(() => this._router.navigate(['pessoas/']));
  }

}
