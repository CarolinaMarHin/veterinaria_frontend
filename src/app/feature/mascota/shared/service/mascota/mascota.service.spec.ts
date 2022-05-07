import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { MascotaService } from './mascota.service';
import { Mascota } from '../../model/mascota';

describe('MascotaService', () => {
  let httpMock: HttpTestingController;
  let service: MascotaService;
  const apiEndpointMascotaConsulta = `${environment.endpoint_productos}/tiposFamilia`;
  const apiEndpointMascotas = `${environment.endpoint_productos}/productos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    const productService: MascotaService = TestBed.inject(MascotaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyMascotas = [
      new Mascota(), new Mascota()
    ];
    service.consultar(new Mascota()).subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyMascotas);
    });
    const req = httpMock.expectOne(apiEndpointMascotaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMascotas);
  });

  it('deberia crear un producto', () => {
    const dummyMascota = new Mascota();
    service.crear(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointMascotas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un producto', () => {
    const dummyMascota = new Mascota();
    service.eliminar(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointMascotas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
