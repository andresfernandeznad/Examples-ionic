import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  valorMin: number = 0;
  valorMax: number = 0;

  numeroRandom: number = 0;

  constructor() { }

  ngOnInit() {
  }

  numRandom() {
    console.log(this.valorMin);
    console.log(this.valorMax);
    if(this.valorMax > this.valorMin) {
      this.numeroRandom = +this.valorMin + Math.floor(Math.random() * (this.valorMax - this.valorMin));
      console.log(this.numeroRandom);
    }
  }
}
