import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public opcionesVeterinaria: MenuItem[] = [
    { id: "item-mascota", url: '/mascota', nombre: 'Mascotas', icono: 'mascota', clase: "opcion-mascota-active", claseActiva: false },
    { id: "item-servicio", url: '/servicio', nombre: 'Servicios', icono: 'servicio', clase: "opcion-servicio-active", claseActiva: false }
  ];
}
