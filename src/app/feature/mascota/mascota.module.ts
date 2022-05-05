import { NgModule } from '@angular/core';

import { MascotaRoutingModule } from './mascota-routing.module';
import { MascotaComponent } from './components/mascota/mascota.component';
import { SharedModule } from '@shared/shared.module';
import { MascotaService } from './shared/service/mascota/mascota.service';


@NgModule({
  declarations: [
    MascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
