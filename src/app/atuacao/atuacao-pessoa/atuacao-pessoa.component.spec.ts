import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuacaoPessoaComponent } from './atuacao-pessoa.component';

describe('AtuacaoPessoaComponent', () => {
  let component: AtuacaoPessoaComponent;
  let fixture: ComponentFixture<AtuacaoPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtuacaoPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtuacaoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
