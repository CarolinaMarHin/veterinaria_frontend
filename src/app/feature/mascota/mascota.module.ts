import { NgModule } from '@angular/core';

import { MascotaRoutingModule } from './mascota-routing.module';
import { MascotaComponent } from './components/mascota/mascota.component';
import { SharedModule } from '@shared/shared.module';
import { MascotaService } from './shared/service/mascota/mascota.service';
import { CrearMascotaComponent } from './components/crearMascota/crear-mascota/crear-mascota.component';
import { ActualizarMascotaComponent } from './components/actualizarMascota/actualizar-mascota/actualizar-mascota.component';
import { BorrarMascotaComponent } from './components/borrarMascota/borrar-mascota/borrar-mascota.component';
import { BuscarMascotaComponent } from './components/buscarMascota/buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    MascotaComponent,
    CrearMascotaComponent,
    ActualizarMascotaComponent,
    BorrarMascotaComponent,
    ActualizarMascotaComponent,
    BuscarMascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
