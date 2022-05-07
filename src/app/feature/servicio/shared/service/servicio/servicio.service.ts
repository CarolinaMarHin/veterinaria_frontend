import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Servicio } from '../../model/servicio';


@Injectable()
export class ServicioService {

  constructor(protected http: HttpService) {}

  public consultar(servicio: Servicio) {
    return this.http.doGet<Servicio[]>(`${environment.endpoint_productos}/servicio/${servicio.id}`, this.http.optsName('consultar servicio'));
  }

  public guardar(servicio: Servicio) {
    return this.http.doPost<Servicio, boolean>(`${environment.endpoint_productos}/servicio`, servicio,
                                                this.http.optsName('crear/actualizar servicio'));
  }

  public eliminar(servicio: Servicio) {
    return this.http.doDelete<boolean>(`${environment.endpoint_productos}/servicio/${servicio.id}`,
                                                 this.http.optsName('eliminar servicio'));
  }
}
