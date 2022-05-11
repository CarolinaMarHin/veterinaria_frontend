import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MascotaModule } from './feature/mascota/mascota.module';
import { ServicioModule } from './feature/servicio/servicio.module';
import { MascotaService } from './feature/mascota/shared/service/mascota/mascota.service';
import { ServicioService } from './feature/servicio/shared/service/servicio/servicio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MascotaModule,
    ServicioModule,
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
