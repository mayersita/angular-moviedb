import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtuacaoElencoComponent } from './atuacao-elenco.component';
import { AtuacaoPessoaComponent } from './atuacao-pessoa/atuacao-pessoa.component';

@NgModule({
  declarations: [
    AtuacaoElencoComponent,
    AtuacaoPessoaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AtuacaoElencoComponent,
    AtuacaoPessoaComponent
  ]
})
export class AtuacaoModule { }
