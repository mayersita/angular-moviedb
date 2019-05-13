import { SearchFilterSPipe } from './../search-filter-s.pipe';
import { MovieModule } from './../movie/movie.module';
import { SerieEditComponent } from './serie-edit/serie-edit.component';
import { AtuacaoModule } from './../atuacao/atuacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie.routing.module';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';

@NgModule({
  declarations: [
    SerieComponent,
    SerieDetailComponent,
    SerieEditComponent,
    SearchFilterSPipe
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    AtuacaoModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [  ],
  exports: [ReactiveFormsModule]
})
export class SerieModule { }
