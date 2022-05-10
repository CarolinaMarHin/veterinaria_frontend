import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MascotaComponent } from './feature/mascota/components/mascota/mascota.component';
import { CrearMascotaComponent } from './feature/mascota/components/crearMascota/crear-mascota/crear-mascota.component';
import { MascotaService } from './feature/mascota/shared/service/mascota/mascota.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicioComponent } from './feature/servicio/components/servicio/servicio.component';
import { ServicioService } from './feature/servicio/shared/service/servicio/servicio.service';
import { CrearServicioComponent } from './feature/servicio/components/crearServicio/crear-servicio/crear-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    CrearMascotaComponent,
    ServicioComponent,
    CrearServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CookieService, MascotaService, ServicioService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
