import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../../model/cita';
import { Servicio } from '../../model/servicio';
import { Veterinario } from '../../model/veterinario';
import { ServicioService } from './servicio.service';

describe('ServicioService', () => {
    let httpMock: HttpTestingController;
    let service: ServicioService;
    const apiEndpointServicio = `${environment.endpoint_veterinaria}/servicios`;
    const apiEndpointVeterinario = `${environment.endpoint_veterinaria}/veterinarios`;
    const apiEndpointCita = `${environment.endpoint_veterinaria}/citas`;

    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ServicioService, HttpService]
        });
        httpMock = injector.inject(HttpTestingController);
        service = TestBed.inject(ServicioService);
    });

    it('should be created', () => {
        const servicioService: ServicioService = TestBed.inject(ServicioService);
        expect(servicioService).toBeTruthy();
    });

    it('deberia listar mascotas', () => {
        const dummyServicios = [
            new Servicio(1, 'Servicio 1', 25000),
            new Servicio(2, 'Servicio 2', 20000)
        ];
        service.consultar().subscribe(servicios => {
            expect(servicios.length).toBe(2);
            expect(servicios).toEqual(dummyServicios);
        });
        const req = httpMock.expectOne(apiEndpointServicio);
        expect(req.request.method).toBe('GET');
        req.flush(dummyServicios);
    });

    it('deberia consultar veterinarios', () => {
        const dummyVeterinarios = [
            new Veterinario(1, 'Veterinario 1', '123445'),
            new Veterinario(2, 'Veterinario 2', '98765')
        ];
        service.consultarVeterinarios().subscribe(veterinario => {
            expect(veterinario.length).toBe(2);
            expect(veterinario).toEqual(dummyVeterinarios);
        });
        const req = httpMock.expectOne(apiEndpointVeterinario);
        expect(req.request.method).toBe('GET');
        req.flush(dummyVeterinarios);
    });

    it('deberia crear una cita', () => {
        const dummyCita = new Cita(1, 1, 1, 1, 25000, '2022-01-12');
        service.crearCita(dummyCita).subscribe(cita => {
            expect(cita).toBe(1);
        });
        const req = httpMock.expectOne(`${apiEndpointCita}`);
        expect(req.request.method).toBe('POST');
        req.event(new HttpResponse<number>({ body: 1 }));
    });
});
