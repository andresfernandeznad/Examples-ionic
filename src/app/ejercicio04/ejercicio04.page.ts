import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {

  nombre: string = "";

  saluda: string = "";

  constructor() { }

  ngOnInit() {
  }

  saludar() {
    if(this.nombre === "") {
      this.saluda = "¡Hola!";
    } else {
      this.saluda = "¡Hola " + this.nombre + "!";
    }
  }

  borrar() {
    this.nombre = "";
  }

}
