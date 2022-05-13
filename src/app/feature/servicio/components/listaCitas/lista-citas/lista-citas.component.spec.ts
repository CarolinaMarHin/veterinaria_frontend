import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';

describe('ListaCitasComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
  });

  it('should create', () => {
    const buscarServicioService: ServicioService = TestBed.inject(ServicioService);
    expect(buscarServicioService).toBeTruthy();
  });
});
