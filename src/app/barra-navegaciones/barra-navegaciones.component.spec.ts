import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionesComponent } from './barra-navegaciones.component';

describe('BarraNavegacionesComponent', () => {
  let component: BarraNavegacionesComponent;
  let fixture: ComponentFixture<BarraNavegacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
