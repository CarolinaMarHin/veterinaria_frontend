import { Component, Input, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/feature/mascota/shared/service/mascota/mascota.service';
import { CitaDetalle } from '../../../shared/model/citaDetalle';
import { Veterinario } from '../../../shared/model/veterinario';
import { ServicioService } from '../../../shared/service/servicio/servicio.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  @Input()
  listaVeterinarios: Veterinario[];

  constructor(protected servicioService: ServicioService,
              protected mascotaService: MascotaService) { }

  public cedulaVeterinaria = '';
  public veterinario: Veterinario;
  public listaCitasVeterinario: CitaDetalle[];
  public mostrarResultado = false;

  ngOnInit(): void {
    this.consultarVeterinarios();
  }

  public consultarVeterinarios() {
    this.servicioService.consultarVeterinarios().subscribe((response) => {
      this.listaVeterinarios = response;
    },
    error => {
      console.log(error);
    });
  }

  public buscarCitasVeterinario() {
    this.veterinario = this.listaVeterinarios.filter(veterinario => veterinario.cedulaVeterinario === this.cedulaVeterinaria)[0];
    this.consultarCitasVeterinario();
  }

  public consultarCitasVeterinario() {
    this.servicioService.consultarCitas().subscribe(citas => {
      this.listaCitasVeterinario = citas.filter(cita => cita.nombreVeterinario.trim() === this.veterinario.nombreVeterinario);
    });
    this.mostrarResultado = true;
  }
}
