import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearlibroComponent } from './crear-libro.component';

describe('CrearlibroComponent', () => {
  let component: CrearlibroComponent;
  let fixture: ComponentFixture<CrearlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearlibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
