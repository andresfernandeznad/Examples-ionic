import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio06',
  templateUrl: './ejercicio06.page.html',
  styleUrls: ['./ejercicio06.page.scss'],
})
export class Ejercicio06Page implements OnInit {

  position: number = 0;

  constructor() { }

  ngOnInit() {
  }

  mover() {
    this.position++;
  }
}
