import { AppModule } from './../app.module';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { AtuacaoModule } from './../atuacao/atuacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieRoutingModule } from './movie.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    MovieEditComponent,
    SearchFilterPipe 
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    AtuacaoModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[  ],
  exports: [ReactiveFormsModule]
})
export class MovieModule { }
