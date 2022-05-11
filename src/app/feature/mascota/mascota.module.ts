import { NgModule } from '@angular/core';

import { MascotaRoutingModule } from './mascota-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MascotaService } from './shared/service/mascota/mascota.service';
import { CrearMascotaComponent } from './components/crearMascota/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './components/buscarMascota/buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    CrearMascotaComponent,
    BuscarMascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
