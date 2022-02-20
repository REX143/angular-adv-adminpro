import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color, DatasetChartOptions } from 'chart.js';
import {baseColors} from 'ng2-charts'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title : String = 'Sin título';


    @Input() labels1 : string = '';
    @Input() data1 =[100,200,400];
    doughnutChartLabels: string[] = [ this.labels1,'SIN DEFINIR', 'SIN DEFINIR' ];
    data=[this.data1[0],this.data1[1],this.data1[2]];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ this.data[0], this.data[1],this.data[2] ] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  // public color : Color[] = [
  //   {'backgroundColor': ['#9E120E','#FF5800','#FFB414']}
  // ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.doughnutChartLabels);
    console.log(this.data);
  }

}
