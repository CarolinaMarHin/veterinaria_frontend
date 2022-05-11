import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redireccionPagina(enlace: string) {
    this.router.navigate([enlace]);
  }
}
