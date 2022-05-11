import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/feature/mascota/shared/model/mascota';
import { MascotaService } from 'src/app/feature/mascota/shared/service/mascota/mascota.service';
import { Cita } from '../../../shared/model/cita';
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

  public cita: Cita = new Cita();
  public listaServicios: Servicio[] = [];
  public listaVeterinarios: Veterinario[] = [];
  public listaMascotas: Mascota[] = [];
  public mostrarMensaje = false;
  public mostrarMensajeError = false;
  public mostrarMensajeCitasMaximas = false;
  public errorCitasMaximas = '';
  public precioServicioString = '$0';

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

  public actualizarServicio(id: string) {
    const servicio: Servicio = this.listaServicios.find(ser => ser.id.toString() === id.split('-')[1].trim());
    this.precioServicioString = '$' + servicio.precioServicio;
    this.cita.codigoServicio = servicio.id;
    this.cita.totalPago = servicio.precioServicio;
  }

  public actualizarVeterinario(id: string) {
    const veterinario: Veterinario = this.listaVeterinarios.find(vet => vet.id.toString() === id.split('-')[1].trim());
    this.cita.idVeterinario = veterinario.id;
  }

  public actualizarMascota(id: string) {
    const mascota: Mascota = this.listaMascotas.find(mas => mas.id.toString() === id.split('-')[1].trim());
    this.cita.codigoMascota = mascota.id;
  }

  public registroServicio() {
    this.servicioService.crearCita(this.cita).subscribe(
      (response) => {
        if (response['valor'] > 0) {
          this.mostrarMensaje = true;
          this.mostrarMensajeError = false;
        } else {
          this.mostrarMensajeError = true;
          this.mostrarMensaje = false;
        }
      },
      error => {
        if (error.error.nombreExcepcion === 'ExcepcionValorInvalido') {
          this.mostrarMensajeCitasMaximas = true;
          this.mostrarMensajeError = false;
          this.mostrarMensaje = false;
          this.errorCitasMaximas = error.error.mensaje;
        } else {
          this.mostrarMensajeError = true;
          this.mostrarMensaje = false;
        }
      }
    );
  }
}
