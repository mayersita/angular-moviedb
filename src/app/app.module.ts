import { AtuacaoService } from './atuacao/atuacao.service';
import { PessoaService } from './pessoa/pessoa.service';
import { SerieService } from './serie/serie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { AccountGuard } from './guards/account.guard';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoginComponent } from './login/login.component';
import { MovieService } from './movie/movie.service';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchFilterSPipe } from './search-filter-s.pipe';
import { SearchFilterXPipe } from './search-filter-x.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AccountService,
    AccountGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SerieService,
    MovieService,
    PessoaService,
    AtuacaoService
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
