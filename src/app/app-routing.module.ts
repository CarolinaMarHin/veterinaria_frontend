import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { CrearMascotaComponent } from './feature/mascota/components/crearMascota/crear-mascota/crear-mascota.component';
import { MascotaComponent } from './feature/mascota/components/mascota/mascota.component';
import { CrearServicioComponent } from './feature/servicio/components/crearServicio/crear-servicio/crear-servicio.component';
import { ServicioComponent } from './feature/servicio/components/servicio/servicio.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'mascota', component: MascotaComponent, canActivate: [SecurityGuard] },
  { path: 'mascota/crear-mascota', component: CrearMascotaComponent, canActivate: [SecurityGuard] },
  { path: 'servicio', component: ServicioComponent, canActivate: [SecurityGuard] },
  { path: 'servicio/crear-servicio', component: CrearServicioComponent, canActivate: [SecurityGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
