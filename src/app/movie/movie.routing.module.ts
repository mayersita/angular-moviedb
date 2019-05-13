import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    {  path: '', component: MovieComponent },
    {  path: 'detalhes/:id', component: MovieDetailComponent },
    {  path: 'editar/:id', component: MovieEditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
