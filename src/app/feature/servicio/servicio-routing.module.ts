import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarServicioComponent } from './components/buscarServicio/buscar-servicio/buscar-servicio.component';
import { CrearServicioComponent } from './components/crearServicio/crear-servicio/crear-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  {
    path: '',
    component: ServicioComponent
  },
  {
    path: 'crear-servicio',
    component: CrearServicioComponent
  },
  {
    path: 'buscar-servicio',
    component: BuscarServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
