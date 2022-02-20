import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() btnClass: string= 'btn-info';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }


  cambiarValor(valor:number){
    if (this.progreso>=100 && valor >=0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <=0 && valor <0) {
      this.valorSalida.emit(0);
      return this.progreso=0;
    }

    this.progreso += valor;
    return this.valorSalida.emit(this.progreso);
  }

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass}`;
  }

  onChange(nuevoValor: number){
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <=0) {
      this.progreso =0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit( this.progreso);
  }

}
