import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/feature/mascota/shared/service/mascota/mascota.service';
import { CitaDetalle } from '../../../shared/model/citaDetalle';
import { Veterinario } from '../../../shared/model/veterinario';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';
import { Constants} from '../../../shared/constants/Constants';
import { Mascota } from 'src/app/feature/mascota/shared/model/mascota';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  constructor(protected servicioService: ServicioService,
              protected mascotaService: MascotaService) { }

  public codigoBusqueda = '';
  public veterinario: Veterinario;
  public mascota: Mascota;
  public listaCitas: CitaDetalle[];
  public mostrarResultado = false;
  public listaVeterinarios: Veterinario[];
  public listaMascotas: Mascota[];

  ngOnInit(): void {
    this.consultarVeterinarios();
    this.consultarMascotas();
  }

  public consultarVeterinarios() {
    this.servicioService.consultarVeterinarios().subscribe((response) => {
      this.listaVeterinarios = response;
    },
    error => {
      console.log(error);
    });
  }

  public consultarMascotas() {
    this.mascotaService.consultar().subscribe((response) => {
      this.listaMascotas = response;
    },
    error => {
      console.log(error);
    });
  }

  public buscarCitas(tipoBusqueda: number) {
    console.log(tipoBusqueda);
    if (tipoBusqueda === Constants.BUSQUEDA_VETERINARIO) {
      this.veterinario = this.listaVeterinarios.filter(veterinario => veterinario.cedulaVeterinario === this.codigoBusqueda)[0];
      this.consultarCitasVeterinario();
    } else if (tipoBusqueda === Constants.BUSQUEDA_MASCOTA) {
      this.mascota = this.listaMascotas.filter(mascota => mascota.codigoMascota === this.codigoBusqueda)[0];
      this.consultarCitasMascota();
    } else {
      this.consultarCitas();
    }
  }

  public consultarCitasVeterinario() {
    this.servicioService.consultarCitas().subscribe(citas => {
      this.listaCitas = citas.filter(cita => cita.nombreVeterinario.trim() === this.veterinario.nombreVeterinario);
    });
    this.mostrarResultado = true;
  }

  public consultarCitasMascota() {
    this.servicioService.consultarCitas().subscribe(citas => {
      this.listaCitas = citas.filter(cita => cita.nombreMascota.trim() === this.mascota.nombreMascota);
    });
    this.mostrarResultado = true;
  }

  public consultarCitas() {
    this.servicioService.consultarCitas().subscribe(citas => {
      this.listaCitas = citas;
    });
    this.mostrarResultado = true;
  }
}
