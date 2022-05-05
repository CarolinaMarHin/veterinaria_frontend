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
    { url: '/mascota', nombre: 'Mascotas', icono: 'mascota' },
    { url: '/servicio', nombre: 'Servicios', icono: 'servicio' }
  ];

  
}
