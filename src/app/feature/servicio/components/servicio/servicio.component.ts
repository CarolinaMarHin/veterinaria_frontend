import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redireccionPagina(enlace: string) {
    this.router.navigate([enlace]);
  }
}
