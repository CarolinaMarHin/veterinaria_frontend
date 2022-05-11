import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
