import { Component, OnInit } from '@angular/core';

interface MenuAdmin {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuAdmin: MenuAdmin[] = [
    {
      ruta: 'dashboard',
      nombre: 'Dashboard',
    },
    {
      ruta: 'usuarios/registrar-usuarios',
      nombre: 'Registrar Usuarios',
    },
    {
      ruta: 'usuarios/lista-usuarios',
      nombre: 'Lista de Usuarios',
    },
    {
      ruta: 'mesas/lista-mesas',
      nombre: 'Lista mesas',
    },
    {
      ruta: 'mesas/registrar-mesa',
      nombre: 'Registrar mesas',
    },
  ];
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

  ngOnInit(): void {}
}
