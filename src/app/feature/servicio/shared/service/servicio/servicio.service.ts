import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../../model/cita';
import { CitaDetalle } from '../../model/citaDetalle';
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

  public crearCita(cita: Cita) {
    return this.http.doPost<Cita, number>(`${environment.endpoint_veterinaria}/citas`, cita,
                                                this.http.optsName('crear cita'));
  }

  public consultarCitas() {
    return this.http.doGet<CitaDetalle[]>(`${environment.endpoint_veterinaria}/citas`,
                                                this.http.optsName('buscar citas'));
  }

}
