import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { ServicioService } from './shared/service/servicio/servicio.service';


@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ],
  providers: [ServicioService]
})
export class ServicioModule { }
