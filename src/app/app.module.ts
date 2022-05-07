import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MascotaComponent } from './feature/mascota/components/mascota/mascota.component';
import { CrearMascotaComponent } from './feature/mascota/components/crearMascota/crear-mascota/crear-mascota.component';
import { MascotaService } from './feature/mascota/shared/service/mascota/mascota.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MascotaComponent,
    CrearMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    FormsModule,
    NgbModule
  ],
  providers: [CookieService, MascotaService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
