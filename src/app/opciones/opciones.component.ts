import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {
  valor1!: number
  valor2!: number
  operacion: string = "ninguna"
  resultado!: number

  constructor() { }

  ngOnInit(): void {
  }

}
