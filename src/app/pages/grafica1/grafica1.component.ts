import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1: string[]=['PAN BIMBO','COCA COLA','CERVEZA CR'];
  public data1 = [150,255,400];

  constructor() { }

  ngOnInit(): void {
  }


}
