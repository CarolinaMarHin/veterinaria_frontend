import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../../shared/model/mascota';
import { MascotaService } from '../../../shared/service/mascota/mascota.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrearMascotaComponent', () => {
  let httpMock: HttpTestingController;
  let service: MascotaService;
  const apiEndpointMascota = `${environment.endpoint_veterinaria}/mascotas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MascotaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    const crearMascotaService: MascotaService = TestBed.inject(MascotaService);
    expect(crearMascotaService).toBeTruthy();
  });

  it('deberia crear una mascota', () => {
    const dummyMascota = new Mascota('Mascota 1', '1234', 'Criollo', '2021-12-13', 20);
    service.crear(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointMascota);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });
});
