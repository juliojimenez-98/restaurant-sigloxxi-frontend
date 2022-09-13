import { Component, OnInit } from '@angular/core';
import { Rol } from '../../interfaces/rol.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-roles-usuarios',
  templateUrl: './roles-usuarios.component.html',
  styleUrls: ['./roles-usuarios.component.css'],
})
export class RolesUsuariosComponent implements OnInit {
  roles: Rol[] = [];
  esAdmin: boolean = false;
  esMesero: boolean = false;
  esCocinero: boolean = false;
  esFinanzas: boolean = false;
  esBodeguero: boolean = false;

  user: any = localStorage.getItem('usuario');
  usuario = JSON.parse(this.user);

  constructor(private servicio: UsuariosService) {
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
    this.obtenerRolesUsuarios();
  }

  obtenerRolesUsuarios() {
    this.servicio.obtenerRolesUsuarios().subscribe((roles) => {
      this.roles = roles;
    });
  }
}
