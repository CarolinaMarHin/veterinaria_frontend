import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeterinariosComponent } from './lista-veterinarios.component';

describe('ListaVeterinariosComponent', () => {
  let component: ListaVeterinariosComponent;
  let fixture: ComponentFixture<ListaVeterinariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVeterinariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
