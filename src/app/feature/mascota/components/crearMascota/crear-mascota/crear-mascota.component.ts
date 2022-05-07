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
  //public response: any;
  
  ngOnInit(): void {}

  public registroMascota() {
    debugger;
    this.mascotaService.crear(this.mascota).subscribe(
      (response) => {console.log(response, typeof response)}
    );
  }
}
