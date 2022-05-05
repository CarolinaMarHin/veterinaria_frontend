import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../model/mascota';


@Injectable()
export class MascotaService {

  constructor(protected http: HttpService) {}

  public consultar(mascota: Mascota) {
    return this.http.doGet<Mascota[]>(`${environment.endpoint_veterinaria}/mascota/${mascota.id}`, this.http.optsName('consultar mascota'));
  }

  public guardar(mascota: Mascota) {
    return this.http.doPost<Mascota, boolean>(`${environment.endpoint_veterinaria}/mascota`, mascota,
                                                this.http.optsName('crear/actualizar mascota'));
  }

  public eliminar(mascota: Mascota) {
    return this.http.doDelete<boolean>(`${environment.endpoint_veterinaria}/mascota/${mascota.id}`,
                                                 this.http.optsName('eliminar mascota'));
  }
}
