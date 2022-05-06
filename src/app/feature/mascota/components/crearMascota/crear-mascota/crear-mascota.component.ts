import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../shared/model/mascota';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  constructor() { }
  
  public mascota: Mascota

  ngOnInit(): void {}


}
