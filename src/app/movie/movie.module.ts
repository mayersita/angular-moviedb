import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieRoutingModule } from './movie.routing.module';
import { MovieService } from './movie.service';
import { EditComponent } from '../edit/edit.component';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
  ],
  providers:[  ],
  exports: []
})
export class MovieModule { }
