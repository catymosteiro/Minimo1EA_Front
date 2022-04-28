import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearvaloracionComponent } from './crear-valoracion.component';

describe('CrearValoracionComponent', () => {
  let component: CrearvaloracionComponent;
  let fixture: ComponentFixture<CrearvaloracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearvaloracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearvaloracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
