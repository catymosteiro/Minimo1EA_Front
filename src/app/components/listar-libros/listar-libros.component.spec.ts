import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlibrosComponent } from './listar-libros.component';

describe('ListarLibrosComponent', () => {
  let component: ListarlibrosComponent;
  let fixture: ComponentFixture<ListarlibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarlibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
