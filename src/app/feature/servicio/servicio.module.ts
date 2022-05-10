import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { ServicioService } from './shared/service/servicio/servicio.service';
import { CrearServicioComponent } from './components/crearServicio/crear-servicio/crear-servicio.component';


@NgModule({
  declarations: [
    ServicioComponent,
    CrearServicioComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ],
  providers: [ServicioService]
})
export class ServicioModule { }
