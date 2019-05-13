import { AtuacaoModule } from './../atuacao/atuacao.module';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieModule } from '../movie/movie.module';
import { SearchFilterXPipe } from '../search-filter-x.pipe';

@NgModule({
  declarations: 
  [ 
    PessoaComponent,
    PessoaDetailComponent,
    PessoaEditComponent,
    SearchFilterXPipe,
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    AtuacaoModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports:[ReactiveFormsModule]
})
export class PessoaModule { }
