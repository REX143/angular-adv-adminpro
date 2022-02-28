import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval,take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs : Subscription;
  constructor() {

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('subs:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs terminado'),
    // );
   this.intervalSubs = this.retornaIntervalo().subscribe(valor => {console.log(valor)});
    //this.retornaIntervalo().subscribe(console.log);
  }

  retornaIntervalo() : Observable<number>{
    return interval(300)
                       .pipe(
                         take(10),
                       map(valor => valor+ 1),
                       filter(valor=> (valor % 2 ===0) ? true: false),
                       );


  }

  retornaObservable(): Observable<number>{
    let i= -1;
     const obs$ = new Observable<number>(observer => {
       const intervalo = setInterval( ()=>{
         i++;
         observer.next(i);
         if (i===4) {
           clearInterval(intervalo);
           observer.complete();
         }

         if (i==2) {
           i=0;
           observer.error('i llego al valor 2');
         }
       }, 1000)
     });

     return obs$;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
this.intervalSubs.unsubscribe();
  }

}
