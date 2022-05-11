import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'mascota', loadChildren: () => import('../app/feature/mascota/mascota.module').then(mod => mod.MascotaModule) },
  { path: 'servicio', loadChildren: () => import('../app/feature/servicio/servicio.module').then(mod => mod.ServicioModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
