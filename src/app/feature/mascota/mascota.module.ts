import { NgModule } from '@angular/core';

import { MascotaRoutingModule } from './mascota-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MascotaService } from './shared/service/mascota/mascota.service';
import { CrearMascotaComponent } from './components/crearMascota/crear-mascota/crear-mascota.component';


@NgModule({
  declarations: [
    CrearMascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
