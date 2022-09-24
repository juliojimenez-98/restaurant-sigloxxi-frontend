import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../interfaces/rol.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioRoles } from '../../interfaces/usuarioRoles.interface';
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
  rolesDelUsuario: any[] = [];
  arrayEliminar: any[] = [];
  usuarioPorId = { nombre: '', appa: '', id_user: 0 };
  usuarioRoles: UsuarioRoles = { rolArray: [] };

  user: any = localStorage.getItem('usuario');
  usuario = JSON.parse(this.user);

  constructor(
    private servicio: UsuariosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerRolesUsuarios();
    this.obtenerUsuarioPorId();
    console.log(this.esAdmin);
  }

  obtenerRolesUsuarios() {
    this.servicio.obtenerRolesUsuarios().subscribe((roles) => {
      this.roles = roles;
    });
  }

  obtenerUsuarioPorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_user = parseInt(id);
      if (id_user) {
        this.servicio.obtenerUsuariosPorId(id_user).subscribe((res) => {
          this.usuarioPorId = {
            nombre: res.findUser.nombre,
            appa: res.findUser.appa,
            id_user: parseInt(res.findUser.id_user),
          };
          console.log(this.usuarioPorId);
          this.rolesDelUsuario = res.rolArrayObject;
          console.log(this.rolesDelUsuario);

          if (this.rolesDelUsuario.find((e: any) => e === 1)) {
            this.esAdmin = true;
          }
          if (this.rolesDelUsuario.find((e: any) => e === 2)) {
            this.esMesero = true;
          }
          if (this.rolesDelUsuario.find((e: any) => e === 3)) {
            this.esCocinero = true;
          }
          if (this.rolesDelUsuario.find((e: any) => e === 4)) {
            this.esFinanzas = true;
          }
          if (this.rolesDelUsuario.find((e: any) => e === 5)) {
            this.esBodeguero = true;
          }
        });
      }
    });
  }

  clickButton(id: number) {
    if (this.rolesDelUsuario.indexOf(id) === -1) {
      Swal.fire({
        title: 'Estás seguro?',
        text: 'Quieres cambiar el rol del usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cambiar rol',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (this.rolesDelUsuario.indexOf(id) === -1) {
          this.rolesDelUsuario.push(id);
          this.usuarioRoles.rolArray = this.rolesDelUsuario;

          if (result.isConfirmed) {
            console.log(this.rolesDelUsuario, 'a');
            this.servicio
              .actualizarRolesUsuarios(
                this.usuarioRoles,
                this.usuarioPorId.id_user
              )
              .subscribe((res) => {
                this.obtenerUsuarioPorId();
                console.log(res);
              });
          }
        } else {
          console.log('Ya esta');
        }
      });
    } else {
      Swal.fire({
        title: 'Estás Seguro?',
        text: "Estás eliminando un rol del usuario.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar Rol',
      }).then((result) => {
        if (this.rolesDelUsuario.indexOf(id) > -1) {
          this.arrayEliminar = this.rolesDelUsuario.filter(
            (item) => item !== id
          );
          console.log(this.arrayEliminar);

          if (result.isConfirmed) {
            console.log(this.rolesDelUsuario, 'no');
            this.servicio
              .actualizarRolesUsuarios(
                this.usuarioRoles,
                this.usuarioPorId.id_user
              )
              .subscribe((res) => {
                this.obtenerUsuarioPorId();
                console.log(res);
              });
          }
        } else {
          console.log('No esta');
        }
      });
    }
  }
}
