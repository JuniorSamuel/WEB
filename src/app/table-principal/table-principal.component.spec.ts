import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrincipalComponent } from './table-principal.component';

describe('TablePrincipalComponent', () => {
  let component: TablePrincipalComponent;
  let fixture: ComponentFixture<TablePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
