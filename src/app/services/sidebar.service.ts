import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    { titulo: 'PRINCIPAL',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'Barra de progreso', url: 'progress'},
        {titulo: 'Graficas', url: 'grafica1'},
        {titulo: 'Promesas', url: 'promesas'},
        {titulo: 'RxjsPage', url: 'rxjs'},
      ]
    }
  ]
  constructor() { }
}
