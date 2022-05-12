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
  public actualizacion = false;
  public mascota: Mascota = new Mascota('', '', '', '', 0, 0);
  public mostrarMensaje = false;
  public mostrarMensajeError = false;
  public mostrarBotonActualizar = false;
  public mostrarBotonEliminar = false;
  public mostrarBotonGuardar = false;

  ngOnInit(): void {}
  public buscarMascota(){
    this.actualizacion = false;
    this.mascotaService.consultarPorCodigo(this.mascota.codigoMascota).subscribe(mascota => {
      this.mascota = mascota;
      this.mostrarMensajeError = false;
      this.mostrarMensaje = true;
      this.mostrarBotonActualizar = true;
      this.mostrarBotonEliminar = true;
      this.mostrarBotonGuardar = false;
      this.exitoBuscarActualizarEliminar = 'Busqueda exitosa.';
    },
    error => {
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      this.mostrarBotonActualizar = false;
      this.mostrarBotonEliminar = false;
      this.mostrarBotonGuardar = false;
      this.actualizacion = false;
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
      this.mostrarBotonActualizar = false;
      this.mostrarBotonEliminar = false;
      this.mostrarBotonGuardar = false;
      this.actualizacion = false;
      console.log(respuesta);
    },
    error => {
      console.log('respuesta', error);
      this.errorBuscarActualizarEliminar = 'Error al eliminar la mascota. Validar que no cuente con citas asignadas.';
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      this.mostrarBotonActualizar = false;
      this.mostrarBotonEliminar = false;
      this.mostrarBotonGuardar = false;
      this.actualizacion = false;
    });
  }

  public actualizarMascota() {
    this.actualizacion = true;
    this.mostrarBotonActualizar = false;
    this.mostrarBotonGuardar = true;
  }

  public guardarActualizacion(){
    this.mascotaService.actualizar(this.mascota).subscribe(respuesta => {
      this.mostrarMensajeError = false;
      this.mostrarMensaje = true;
      this.mostrarBotonActualizar = true;
      this.mostrarBotonEliminar = true;
      this.mostrarBotonGuardar = true;
      this.buscarMascota();
      this.exitoBuscarActualizarEliminar = 'Se actualizo correctamente la mascota';
      console.log(respuesta);
    },
    error => {
      console.log('respuesta', error);
      this.errorBuscarActualizarEliminar = 'Ocurrio un error actualizando la mascota.';
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      this.mostrarBotonActualizar = false;
      this.mostrarBotonEliminar = false;
      this.mostrarBotonGuardar = false;
      this.actualizacion = false;
    });
  }
}
