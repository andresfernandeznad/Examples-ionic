import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  name: string;

  mostrar: boolean = false;

  nombreBoton: string = "Mostrar nombre";

  constructor() { }

  ngOnInit() {
  }

  mostrarNombre() {
    if (!this.mostrar) {
      this.name = "Andrés Fernández";
      this.nombreBoton = "Limpiar nombre";
    } else {
      this.name = "";
      this.nombreBoton = "Mostrar nombre";
    }
    this.mostrar = !this.mostrar;
  }
}
