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

  public mascota: Mascota = new Mascota();
  public mostrarMensaje = false;
  public mostrarMensajeError = false;

  ngOnInit(): void {
    this.iniciarObjetoMascota();
  }

  private iniciarObjetoMascota() {
    this.mascota.nombreMascota = '';
    this.mascota.id = 0;
    this.mascota.peso = 0;
    this.mascota.raza = '';
    this.mascota.fechaNacimientoMascota = '';
  }

  public buscarMascota(){
    this.mascotaService.consultarPorCodigo(this.mascota.codigoMascota).subscribe(mascota => {
      this.mascota = mascota;
      this.mostrarMensajeError = false;
      this.mostrarMensaje = true;
    },
    error => {
      this.mostrarMensajeError = true;
      this.mostrarMensaje = false;
      console.log(error);
    });
  }
}
