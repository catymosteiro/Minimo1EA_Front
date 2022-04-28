import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarvaloracionComponent } from './listar-valoraciones.component';

describe('ListarValoracionesComponent', () => {
  let component: ListarvaloracionComponent;
  let fixture: ComponentFixture<ListarvaloracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarvaloracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarvaloracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
