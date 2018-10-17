import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  num: number = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    this.num++;
  }

  decrementar() {
    this.num--;
  }

  reset() {
    this.num = 0;
  }

}
