import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';

describe('CrearServicioComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
  });

  it('should be created', () => {
    const crearServicioService: ServicioService = TestBed.inject(ServicioService);
    expect(crearServicioService).toBeTruthy();
  });
});
