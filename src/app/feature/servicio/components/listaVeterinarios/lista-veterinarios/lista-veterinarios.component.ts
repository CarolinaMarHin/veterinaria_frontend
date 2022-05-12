import { Component, Input, OnInit } from '@angular/core';
import { Veterinario } from '../../../shared/model/veterinario';

@Component({
  selector: 'app-lista-veterinarios',
  templateUrl: './lista-veterinarios.component.html',
  styleUrls: ['./lista-veterinarios.component.css']
})
export class ListaVeterinariosComponent implements OnInit {

  @Input()
  listaVeterinarios: Veterinario[];

  constructor() { }

  ngOnInit(): void {}

}
