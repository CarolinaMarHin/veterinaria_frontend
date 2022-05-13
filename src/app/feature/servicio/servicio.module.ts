import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ServicioService } from './shared/service/servicio/servicio.service';
import { CrearServicioComponent } from './components/crearServicio/crear-servicio/crear-servicio.component';
import { BuscarServicioComponent } from './components/buscarServicio/buscar-servicio/buscar-servicio.component';
import { ListaCitasComponent } from './components/listaCitas/lista-citas/lista-citas.component';
import { ListaVeterinariosComponent } from './components/listaVeterinarios/lista-veterinarios/lista-veterinarios.component';


@NgModule({
  declarations: [
    CrearServicioComponent,
    BuscarServicioComponent,
    ListaCitasComponent,
    ListaVeterinariosComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ],
  providers: [ServicioService]
})
export class ServicioModule { }
