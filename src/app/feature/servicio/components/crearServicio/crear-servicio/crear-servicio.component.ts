import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../../shared/model/servicio';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {

  constructor(protected servicioService: ServicioService) { }

  public listaServicios: Servicio[] = [];

  ngOnInit(): void {
    this.cargarInformacion();
  }

  private cargarInformacion() {
    this.servicioService.consultar().subscribe((response) => {
      this.listaServicios = response;
    });
  }

}
