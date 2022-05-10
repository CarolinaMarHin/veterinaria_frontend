import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/feature/mascota/shared/model/mascota';
import { MascotaService } from 'src/app/feature/mascota/shared/service/mascota/mascota.service';
import { Servicio } from '../../../shared/model/servicio';
import { Veterinario } from '../../../shared/model/veterinario';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {

  constructor(protected servicioService: ServicioService,
    protected mascotaService: MascotaService) { }

  public listaServicios: Servicio[] = [];
  public listaVeterinarios: Veterinario[] = [];
  public listaMascotas: Mascota[] = []

  ngOnInit(): void {
    this.cargarInformacion();
  }

  private cargarInformacion() {
    this.servicioService.consultar().subscribe((response) => {
      this.listaServicios = response;
    });
    this.servicioService.consultarVeterinarios().subscribe((response) => {
      this.listaVeterinarios = response;
    });
    this.mascotaService.consultar().subscribe((response) => {
      this.listaMascotas = response;
    });
  }

}
