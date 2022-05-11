import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../shared/model/mascota';
import { MascotaService } from '../../shared/service/mascota/mascota.service';

import { MascotaComponent } from './mascota.component';

describe('MascotaComponent', () => {
  let component: MascotaComponent;
  let fixture: ComponentFixture<MascotaComponent>;
  let httpMock: HttpTestingController;
  let service: MascotaService;
  let router: Router;
  const apiEndpointMascota = `${environment.endpoint_veterinaria}/mascotas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [MascotaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MascotaService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar mascota', () => {
    const dummyMascotas = [
      new Mascota('Mascota 1', '1234', 'Criollo', '2021-12-13', 20, 1), new Mascota('Mascota 1', '5678', 'Criollo', '2021-12-13', 20, 1)
    ];
    service.consultar().subscribe(mascotas => {
      expect(mascotas.length).toBe(2);
      expect(mascotas).toEqual(dummyMascotas);
    });
    const req = httpMock.expectOne(apiEndpointMascota);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMascotas);
  });

  it('deberia eliminar una mascota', () => {
    const dummyMascota = new Mascota('Mascota 1', '1234', 'Criollo', '2021-12-13', 20, 1);
    service.eliminar(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointMascota}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('should navigate', () => {
    const componentMascota = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    componentMascota.redireccionPagina('mascota/crear-mascota');
    expect(navigateSpy).toHaveBeenCalledWith(['mascota/crear-mascota']);
  });
});
