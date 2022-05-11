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
  const apiEndpointMascotas = `${environment.endpoint_veterinaria}/mascotas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    const mascotaService: MascotaService = TestBed.inject(MascotaService);
    expect(mascotaService).toBeTruthy();
  });

  it('deberia listar mascotas', () => {
    const dummyMascotas = [
      new Mascota('Guardian', '1122', 'Criollo', '2020-12-12', 21),
      new Mascota('Titan', '2211', 'Criollo', '2020-12-12', 21)
    ];
    service.consultar().subscribe(mascotas => {
      expect(mascotas.length).toBe(2);
      expect(mascotas).toEqual(dummyMascotas);
    });
    const req = httpMock.expectOne(apiEndpointMascotas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMascotas);
  });

  it('deberia crear una mascota', () => {
    const dummyMascota = new Mascota('Guardian', '1122', 'Criollo', '2020-12-12', 21);
    service.crear(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toBeGreaterThan(0);
    });
    const req = httpMock.expectOne(apiEndpointMascotas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar una mascota', () => {
    const dummyMascotas = [
      new Mascota('Guardian', '1122', 'Criollo', '2020-12-12', 21, 1),
      new Mascota('Titan', '2211', 'Criollo', '2020-12-12', 21, 2)
    ];
    service.eliminar(dummyMascotas[0]).subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(`${apiEndpointMascotas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualizar una mascota', () => {
    const dummyMascota = new Mascota('Guardian actualizado', '1122', 'Criollo', '2020-12-12', 21, 1);
    service.actualizar(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(`${apiEndpointMascotas}/1`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
