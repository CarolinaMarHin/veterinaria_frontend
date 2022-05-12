import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../../model/mascota';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MascotaService {

  constructor(
    protected httpService: HttpService,
    protected http: HttpClient
    ) {}

  public crear(mascota: Mascota) {
    return this.httpService.doPost<Mascota, number>(`${environment.endpoint_veterinaria}/mascotas`, mascota,
                                                this.httpService.optsName('crear/actualizar mascota'));
  }

  public consultar() {
    return this.httpService.doGet<Mascota[]>(`${environment.endpoint_veterinaria}/mascotas`,
                                                this.httpService.optsName('consultar mascota'));
  }

  public consultarPorCodigo(codigoMascota: string) {
    return this.httpService.doGet<Mascota>(`${environment.endpoint_veterinaria}/mascotas/${codigoMascota}`,
                                                this.httpService.optsName('consultar mascota por codigo'));
  }

  public consultarPorId(idMascota: string) {
    return this.httpService.doGet<Mascota>(`${environment.endpoint_veterinaria}/mascotas/obtenerId/${idMascota}`,
                                                this.httpService.optsName('consultar mascota por id'));
  }

  public actualizar(mascota: Mascota) {
    return this.http.put<boolean>(`${environment.endpoint_veterinaria}/mascotas/${mascota.id}`, mascota,
                                                this.httpService.optsName('crear/actualizar mascota'));
  }

  public eliminar(mascota: Mascota) {
    return this.httpService.doDelete<boolean>(`${environment.endpoint_veterinaria}/mascotas/${mascota.id}`,
                                                 this.httpService.optsName('eliminar mascota'));
  }
}
