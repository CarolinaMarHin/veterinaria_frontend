import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { MascotaService } from 'src/app/feature/mascota/shared/service/mascota/mascota.service';

import { ServicioComponent } from './servicio.component';

describe('ServicioComponent', () => {
  let component: ServicioComponent;
  let fixture: ComponentFixture<ServicioComponent>;
  // let service: ServicioService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [MascotaService, HttpService]
    });
    // service = TestBed.inject(ServicioService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    const componentServicio = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    componentServicio.redireccionPagina('servicio/crear-servicio');
    expect(navigateSpy).toHaveBeenCalledWith(['servicio/crear-servicio']);
  });
});
