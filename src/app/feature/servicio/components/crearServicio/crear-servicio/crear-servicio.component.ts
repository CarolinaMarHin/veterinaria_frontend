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
  public mostrarMensaje: Boolean = false;
  public mostrarMensajeError: Boolean = false;
  private totalPago: number = 0;
  private idVeterinario: number = 0;
  private codigoMascota: number = 0;
  private codigoServicio: number = 0;
  public precioServicioString: string = "$0";

  ngOnInit(): void {
    this.cargarInformacionMascotas();
    this.cargarInformacionServicios();
    this.cargarInformacionVeterinarios();
  }

  private cargarInformacionServicios() {
    this.servicioService.consultar().subscribe((response) => {
      this.listaServicios = response;
    },
    error => {
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      console.log(error); 
    });
  }

  private cargarInformacionMascotas() {
    this.mascotaService.consultar().subscribe((response) => {
      this.listaMascotas = response;
    },
    error => {
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      console.log(error); 
    });
  }

  private cargarInformacionVeterinarios() {
    this.servicioService.consultarVeterinarios().subscribe((response) => {
      this.listaVeterinarios = response;
    },
    error => {
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      console.log(error); 
    });
  }

  public actualizarServicio(id:string) {
    let servicio: Servicio = this.listaServicios.find(ser => ser.id.toString() === id.split('-')[1].trim())
    this.precioServicioString = '$' + servicio.precioServicio;
    this.codigoServicio = servicio.id;
    this.totalPago = servicio.precioServicio;
    console.log("1", this.codigoServicio, this.totalPago);
  }

  public actualizarVeterinario(id:string) {
    let veterinario: Veterinario = this.listaVeterinarios.find(vet => vet.id.toString() === id.split('-')[1].trim());
    this.idVeterinario = veterinario.id;
    console.log("2", this.idVeterinario);
  }

  public actualizarMascota(id:string) {
    let mascota: Mascota = this.listaMascotas.find(mas => mas.id.toString() === id.split('-')[1].trim())
    this.codigoMascota = mascota.id;
    console.log("3", this.codigoMascota);
  }


}
