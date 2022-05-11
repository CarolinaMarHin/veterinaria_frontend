import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarMascotaComponent } from './components/buscarMascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './components/crearMascota/crear-mascota/crear-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';


const routes: Routes = [
  {
    path: '',
    component: MascotaComponent
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
