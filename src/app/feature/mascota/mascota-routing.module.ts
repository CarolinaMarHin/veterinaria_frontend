import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';


const routes: Routes = [
  {
    path: '',
    component: MascotaComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
