import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  esAdmin: boolean = false;
  esMesero: boolean = false;
  esCocinero: boolean = false;
  esFinanzas: boolean = false;
  esBodeguero: boolean = false;

  user: any = localStorage.getItem('usuario');
  usuario = JSON.parse(this.user);
  constructor() {
    if (localStorage.getItem('token')) {
      if (this.usuario.rolArray.find((e: any) => e === 1)) {
        this.esAdmin = true;
      }
      if (this.usuario.rolArray.find((e: any) => e === 2)) {
        this.esMesero = true;
      }
      if (this.usuario.rolArray.find((e: any) => e === 3)) {
        this.esCocinero = true;
      }
      if (this.usuario.rolArray.find((e: any) => e === 4)) {
        this.esFinanzas = true;
      }
      if (this.usuario.rolArray.find((e: any) => e === 5)) {
        this.esBodeguero = true;
      }
    }
  }

  ngOnInit(): void {
    console.log(this.esAdmin, this.esMesero);
  }
}
