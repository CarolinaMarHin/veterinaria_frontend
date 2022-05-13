import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../../shared/model/servicio';
import { Veterinario } from '../../../shared/model/veterinario';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';

@Component({
  selector: 'app-buscar-servicio',
  templateUrl: './buscar-servicio.component.html',
  styleUrls: ['./buscar-servicio.component.css']
})
export class BuscarServicioComponent implements OnInit {

  public listaServicios: Servicio[] = [];
  public listaVeterinarios: Veterinario[] = [];
  public mostrarMensajeError = false;
  public cargarListaVeterinarios = false;
  public cargarListaCitasVeterinarios = false;

  constructor(protected servicioService: ServicioService) { }

  ngOnInit(): void {
  }

  public consultarVeterinarios() {
    this.servicioService.consultarVeterinarios().subscribe((response) => {
      this.listaVeterinarios = response;
      this.mostrarMensajeError = false;
      this.cargarListaVeterinarios = true;
      this.cargarListaCitasVeterinarios = false;
    },
    error => {
      this.mostrarMensajeError = true;
      console.log(error);
    });
  }

  public listarCitasVeterinario() {
    this.cargarListaVeterinarios = false;
    this.cargarListaCitasVeterinarios = true;
  }

}
