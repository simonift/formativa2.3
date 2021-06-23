import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azar',
  templateUrl: './azar.component.html',
  styleUrls: ['./azar.component.css']
})
export class AzarComponent implements OnInit {

  n = 15
  arr = new Array(this.n)

  generarLista(){
    for(let i=0; i<=this.n; i++)
      this.arr[i] = i++;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
