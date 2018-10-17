import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  pesetas: number = 0;

  euros: number = 0;

  constructor() { }

  ngOnInit() {
  }

  conversionPesToEur() {
    this.euros = this.pesetas / 166.386;
  }

  conversionEurToPes() {
    this.pesetas = this.euros * 166.386;
  }

}
