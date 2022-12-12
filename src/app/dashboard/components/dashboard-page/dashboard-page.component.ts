import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  usuarios: Usuario[] = [];
  totalUsuarios: any = 0;
  rolesUsuarios: any[] = [];
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
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicio.obtenerUsuarios().subscribe((users) => {
      this.usuarios = users;
      this.usuarios.map((e) => {
        e.rolArray.map((r: any) => {
          this.rolesUsuarios = r;
          console.log(this.rolesUsuarios);
          this.totalUsuarios = this.usuarios.length;
        });
      });
    });
  }
}
