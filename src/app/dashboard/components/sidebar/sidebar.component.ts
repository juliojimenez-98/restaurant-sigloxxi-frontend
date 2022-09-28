import { Component, OnInit } from '@angular/core';

interface MenuAdmin {
  ruta: string;
  nombre: string;
}

interface MenuMesero {
  ruta: string;
  nombre: string;
}

interface MenuCocinero {
  ruta: string;
  nombre: string;
}

interface MenuFinanzas {
  ruta: string;
  nombre: string;
}

interface MenuBodeguero {
  ruta: string;
  nombre: string;
}

interface MenuUsuario {
  ruta: string;
  nombre: string;
}

interface MenuIngredientes {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  openUsuarios: Boolean = false;
  openIng: Boolean = false;
  menuUsuario: MenuUsuario[] = [
    {
      ruta: 'usuarios/registrar-usuarios',
      nombre: 'Registrar Usuarios',
    },
    {
      ruta: 'usuarios/lista-usuarios',
      nombre: 'Lista de Usuarios',
    },
  ];

  menuIngredientes: MenuIngredientes[] = [
    {
      ruta: 'ingredientes/registro-ingredientes',
      nombre: 'Registrar Ingrediente',
    },
    {
      ruta: 'ingredientes/lista-ingredientes',
      nombre: 'Lista Ingrediente',
    },
  ];
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
    {
      ruta: 'ingredientes/registro-ingredientes',
      nombre: 'Registrar Ingrediente',
    },
    {
      ruta: 'ingredientes/lista-ingredientes',
      nombre: 'Lista Ingrediente',
    },
  ];

  menuMesero: MenuMesero[] = [
    {
      ruta: 'dashboard',
      nombre: 'Inicio',
    },
    {
      ruta: 'mesas/lista-mesas',
      nombre: 'Mesas',
    },
    {
      ruta: 'mesas/lista-mesa',
      nombre: 'Atenciones de hoy',
    },
    {
      ruta: 'mesas/lista-mess',
      nombre: 'Propinas',
    },
  ];
  menuCocinero: MenuCocinero[] = [
    {
      ruta: 'dashboard',
      nombre: 'Inicio',
    },
    {
      ruta: 'mesas/lista-mesas',
      nombre: 'Pedidos',
    },
    {
      ruta: 'mesas/lista-mesa',
      nombre: 'Inventarios',
    },
    {
      ruta: 'mesas/lista-mess',
      nombre: 'Recetas',
    },
  ];

  menuFinanzas: MenuFinanzas[] = [
    {
      ruta: 'dashboard',
      nombre: 'Inicio',
    },
    {
      ruta: 'mesas/lista-mesas',
      nombre: 'Ingresos',
    },
    {
      ruta: 'mesas/lista-mesa',
      nombre: 'Boletas',
    },
  ];

  menuBodeguero: MenuBodeguero[] = [
    {
      ruta: 'dashboard',
      nombre: 'Inicio',
    },
    {
      ruta: 'mesas/lista-mesas',
      nombre: 'Bodegas',
    },
    {
      ruta: 'mesas/lista-mesa',
      nombre: 'Inventario',
    },
    {
      ruta: 'mesas/lista-mesa',
      nombre: 'Recepción proveedores',
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
