import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie.routing.module';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';

@NgModule({
  declarations: [
    SerieComponent,
    SerieDetailComponent
  ],
  imports: [
    CommonModule,
    SerieRoutingModule
  ],
  providers: [  ]
})
export class SerieModule { }
