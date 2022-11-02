import { Component, OnInit } from '@angular/core';

interface MenuSide {
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
  openMesas: Boolean = false;
  openRecetas: Boolean = false;
  openPlatos: Boolean = false;
  openProveedores: Boolean = false;
  openBebestibles: Boolean = false;
  openDetalleMesas: Boolean = false;
  openPedidoIngredientes: Boolean = false;
  menuUsuario: MenuSide[] = [
    {
      ruta: 'usuarios/registrar-usuarios',
      nombre: 'Registrar Usuarios',
    },
    {
      ruta: 'usuarios/lista-usuarios',
      nombre: 'Lista de Usuarios',
    },
  ];

  menuIngredientes: MenuSide[] = [
    {
      ruta: 'ingredientes/registro-ingredientes',
      nombre: 'Registrar Ingrediente',
    },
    {
      ruta: 'ingredientes/lista-ingredientes',
      nombre: 'Lista Ingrediente',
    },
  ];
  menuMesas: MenuSide[] = [
    {
      ruta: 'mesas/registrar-mesa',
      nombre: 'Registrar mesas',
    },
    {
      ruta: 'mesas/lista-mesas',
      nombre: 'Lista mesas',
    },
  ];
  menuRecetas: MenuSide[] = [
    {
      ruta: 'recetas/registrar-receta',
      nombre: 'Registrar recetas',
    },
    {
      ruta: 'recetas/lista-recetas',
      nombre: 'Listar recetas',
    },
  ];
  menuPlatos: MenuSide[] = [
    {
      ruta: 'platos/registrar-plato',
      nombre: 'Registrar platos',
    },
    {
      ruta: 'platos/lista-platos',
      nombre: 'Listar platos',
    },
  ];

  menuProveedores: MenuSide[] = [
    {
      ruta: 'proveedores/registrar-proveedor',
      nombre: 'Registrar proveedores',
    },
    {
      ruta: 'proveedores/lista-proveedores',
      nombre: 'Listar proveedores',
    },
  ];

  menuBebestibles: MenuSide[] = [
    {
      ruta: 'bebestibles/registro',
      nombre: 'Registrar bebestibles',
    },
    {
      ruta: 'bebestibles/lista',
      nombre: 'Listar bebestibles',
    },
  ];

  menuDetalleMesas: MenuSide[] = [
    {
      ruta: 'mesas/vista-mesero',
      nombre: 'Vista Mesero',
    },
  ];

  menuPedidoIng: MenuSide[] = [
    {
      ruta: 'pedidos-ingredientes/registro',
      nombre: 'Pedir ingredientes',
    },
    {
      ruta: 'pedidos-ingredientes/lista',
      nombre: 'Ver pedidos Ing.',
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
