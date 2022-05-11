import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../shared/model/mascota';
import { MascotaService } from '../../../shared/service/mascota/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  constructor(protected mascotaService: MascotaService) {
  }

  public mascota: Mascota = new Mascota();
  public mostrarMensaje = false;
  public mostrarMensajeError = false;

  ngOnInit(): void {}

  public registroMascota() {
    this.mascotaService.crear(this.mascota).subscribe(
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
        this.mostrarMensajeError = true;
        this.mostrarMensaje = false;
        console.log(error);
      }
    );
  }
}
