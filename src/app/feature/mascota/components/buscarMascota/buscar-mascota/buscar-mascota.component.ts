import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../shared/model/mascota';
import { MascotaService } from '../../../shared/service/mascota/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  constructor(protected mascotaService: MascotaService) { }

  public errorBuscarActualizarEliminar = '';
  public exitoBuscarActualizarEliminar  = '';

  public mascota: Mascota = new Mascota('', '', '', '', 0, 0);
  public mostrarMensaje = false;
  public mostrarMensajeError = false;
  public mostrarBotonActualizarEliminar = false;

  ngOnInit(): void {}
  public buscarMascota(){
    this.mascotaService.consultarPorCodigo(this.mascota.codigoMascota).subscribe(mascota => {
      this.mascota = mascota;
      this.mostrarMensajeError = false;
      this.mostrarMensaje = true;
      this.mostrarBotonActualizarEliminar = true;
      this.exitoBuscarActualizarEliminar = 'Busqueda exitosa.';
    },
    error => {
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      this.mostrarBotonActualizarEliminar = false;
      this.errorBuscarActualizarEliminar = 'Error al buscar la mascota, intente nuevamente con un código valido.';
      console.log(error);
    });
  }

  public eliminarMascota() {
    this.mascotaService.eliminar(this.mascota).subscribe(respuesta => {
      this.mascota =  new Mascota('', '', '', '', 0, 0);
      this.exitoBuscarActualizarEliminar = 'Se elimino correctamente la mascota';
      this.mostrarMensajeError = false;
      this.mostrarMensaje = true;
      this.mostrarBotonActualizarEliminar = false;
      console.log(respuesta);
    },
    error => {
      console.log('respuesta', error);
      this.errorBuscarActualizarEliminar = 'Error al eliminar la mascota. Validar que no cuente con citas asignadas.';
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      this.mostrarBotonActualizarEliminar = false;
    });
  }

  public actualizarMascota() {
    this.mascotaService.actualizar(this.mascota).subscribe(respuesta => {
      this.exitoBuscarActualizarEliminar = 'Se actualizo correctamente la mascota';
      this.mostrarMensajeError = false;
      this.mostrarMensaje = true;
      this.mostrarBotonActualizarEliminar = true;
      this.buscarMascota();
    },
    error => {
      console.log('respuesta', error);
      this.errorBuscarActualizarEliminar = 'Ocurrio un error actualizando la mascota.';
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      this.mostrarBotonActualizarEliminar = true;
    });
  }
}
