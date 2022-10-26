import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../interfaces/rol.interface';
import { UsuarioRoles } from '../../interfaces/usuarioRoles.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-roles-usuarios',
  templateUrl: './roles-usuarios.component.html',
  styleUrls: ['./roles-usuarios.component.css'],
})
export class RolesUsuariosComponent implements OnInit {
  roles: Rol[] = [];
  rolesDelUsuario: any[] = [];
  usuarioPorId = { nombre: '', appa: '', id_user: 0 };
  usuarioRoles: UsuarioRoles = { rolArray: [] };

  constructor(
    private servicio: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerRolesUsuarios();
    this.obtenerUsuarioPorId();
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
        });
      }
    });
  }

  checkboxChanged(event: any, id: any) {
    if (event.target.checked) this.rolesDelUsuario.push(id); //If checked, add to array

    if (!event.target.checked && this.rolesDelUsuario.indexOf(id) !== -1) {
      var index = this.rolesDelUsuario.indexOf(id);
      this.rolesDelUsuario.splice(index, 1);
    }
  }

  isChecked(id: any) {
    {
      return this.rolesDelUsuario.indexOf(id) != -1 ? true : false;
    }
  }

  guardarCambios() {
    Swal.fire({
      title: 'Cambiar los roles?',
      text: `Ahora ${this.usuarioPorId.nombre} ${this.usuarioPorId.appa} tendra otros roles`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambiar roles!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioRoles.rolArray = this.rolesDelUsuario;
        this.servicio
          .actualizarRolesUsuarios(this.usuarioRoles, this.usuarioPorId.id_user)
          .subscribe((res: any) => {
            console.log(res);
            if (res.msg === 'ok') {
              Swal.fire(
                'Actualizado!',
                'Se han actualizado los roles del usuario',
                'success'
              );
              this.router.navigateByUrl('/admin/usuarios/lista-usuarios');
            }
          });
      }
    });
    console.log(this.rolesDelUsuario);
  }
}
