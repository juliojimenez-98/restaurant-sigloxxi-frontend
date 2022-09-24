import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../interfaces/rol.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent implements OnInit {
  roles: Rol[] = [];
  arrayRoles: any[] = [];
  formRegistroUsuarios: FormGroup = this.fb.group({
    id_user: [],
    nombre: ['', [Validators.required]],
    appa: ['', [Validators.required]],
    email: ['', [Validators.required]],
    id_rol: ['', [Validators.required, Validators.minLength(2)]],
    rolArray: [],
  });

  constructor(
    private fb: FormBuilder,
    private servicio: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerRolesUsuarios();
    this.obtenerUsuarioPorId();
  }

  registroUsuarios() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando usuario',
      showConfirmButton: false,
    });
    this.arrayRoles.push(parseInt(this.formRegistroUsuarios.value.id_rol));
    this.formRegistroUsuarios.value.rolArray = this.arrayRoles;
    this.servicio.registroUsuarios(this.formRegistroUsuarios.value).subscribe(
      (res: any) => {
        if (res.msg) {
          Swal.close();

          Swal.fire(
            'Usuario registrado',
            `El usuario ${res.usuario.nombre} ${res.usuario.appa} fue exitosamente registrado`,
            'success'
          );
        }
      },
      (error) => {
        Swal.close();
        if (error.error.errors) {
          Swal.fire(
            'Error al registrar usuario',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire(
            'Error al registrar usuario',
            `${error.error.msg} `,
            'error'
          );
        }
        console.log(error);
      }
    );
  }

  obtenerUsuarioPorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_user = parseInt(id);
      if (id_user) {
        this.servicio.obtenerUsuariosPorId(id_user).subscribe((res) => {
          this.formRegistroUsuarios.patchValue({
            id_user: res.findUser.id_user,
            nombre: res.findUser.nombre,
            appa: res.findUser.appa,
            email: res.findUser.email,
            id_rol: res.findUser.id_rol,
          });
          console.log(res);
          console.log(this.formRegistroUsuarios.value.id_user);
        });
      }
    });
  }

  actualizarUsuario() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_user = parseInt(id);
      this.servicio
        .actualizarUsuarios(this.formRegistroUsuarios.value, id_user)
        .subscribe((res) => {
          console.log('respuesta', res);
          Swal.fire(
            'Usuario actualizado',
            `Usuario actualizado con exito`,
            'success'
          );
          this.router.navigateByUrl('/admin/usuarios/lista-usuarios');
        });
    });
  }

  obtenerRolesUsuarios() {
    this.servicio.obtenerRolesUsuarios().subscribe((roles) => {
      this.roles = roles;
    });
  }
}
