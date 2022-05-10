import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Servicio } from '../../model/servicio';
import { Veterinario } from '../../model/veterinario';


@Injectable()
export class ServicioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Servicio[]>(`${environment.endpoint_veterinaria}/servicios`, this.http.optsName('consultar servicios'));
  }

  public consultarVeterinarios() {
    return this.http.doGet<Veterinario[]>(`${environment.endpoint_veterinaria}/veterinarios`, this.http.optsName('consultar veterinarios'));
  }

}
