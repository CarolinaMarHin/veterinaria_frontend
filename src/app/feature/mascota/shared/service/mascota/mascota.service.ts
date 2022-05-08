import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../model/mascota';


@Injectable()
export class MascotaService {

  constructor(
    protected httpService: HttpService
    ) {}

  public crear(mascota: Mascota) {
    console.log(`${environment.endpoint_veterinaria}/mascotas`, mascota);
    return this.httpService.doPost<Mascota, Number>(`${environment.endpoint_veterinaria}/mascotas`, mascota,
                                                this.httpService.optsName('crear/actualizar mascota'));
  }

  public consultar() {
    return this.httpService.doGet<Mascota[]>(`${environment.endpoint_veterinaria}/mascotas`, this.httpService.optsName('consultar mascota'));
  }

  public actualizar(mascota: Mascota) {
    return this.httpService.doPost<Mascota, boolean>(`${environment.endpoint_veterinaria}/mascota`, mascota,
                                                this.httpService.optsName('crear/actualizar mascota'));
  }

  public eliminar(mascota: Mascota) {
    return this.httpService.doDelete<Boolean>(`${environment.endpoint_veterinaria}/mascotas/${mascota.id}`,
                                                 this.httpService.optsName('eliminar mascota'));
  }
}
