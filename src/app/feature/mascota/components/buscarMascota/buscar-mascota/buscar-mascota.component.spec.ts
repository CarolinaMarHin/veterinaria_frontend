import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../../shared/model/mascota';
import { MascotaService } from '../../../shared/service/mascota/mascota.service';

describe('BuscarMascotaComponent', () => {
  let httpMock: HttpTestingController;
  let service: MascotaService;
  const apiEndpointMascota = `${environment.endpoint_veterinaria}/mascotas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MascotaService);
  });

  it('should create', () => {
    const crearMascotaService: MascotaService = TestBed.inject(MascotaService);
    expect(crearMascotaService).toBeTruthy();
  });

  it('deberia buscar una mascota por codigo', () => {
    const dummyMascota = new Mascota('Mascota 1', '1234', 'Criollo', '2021-12-13', 20, 1);
    service.consultarPorCodigo(dummyMascota.codigoMascota).subscribe((respuesta) => {
      expect(respuesta.id).toEqual(dummyMascota.id);
      expect(respuesta).toBe(dummyMascota);
    });
    const req = httpMock.expectOne(`${apiEndpointMascota}/1234`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMascota);
  });
});
