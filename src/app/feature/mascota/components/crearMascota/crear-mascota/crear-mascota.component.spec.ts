import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { MascotaService } from '../../../shared/service/mascota/mascota.service';

describe('CrearMascotaComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
  });

  it('should be created', () => {
    const crearMascotaService: MascotaService = TestBed.inject(MascotaService);
    expect(crearMascotaService).toBeTruthy();
  });
});
