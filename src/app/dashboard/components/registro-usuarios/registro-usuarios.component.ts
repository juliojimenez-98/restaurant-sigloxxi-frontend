import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    nombre: ['', [Validators.required]],
    appa: ['', [Validators.required]],
    email: ['', [Validators.required]],
    id_rol: ['', [Validators.required, Validators.minLength(2)]],
    rolArray: [],
  });

  constructor(
    private fb: FormBuilder,
    private servicio: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerRolesUsuarios();
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
            'Usuario registrado',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire('Usuario registrado', `${error.error.msg} `, 'error');
        }
        console.log(error);
      }
    );
  }

  obtenerRolesUsuarios() {
    this.servicio.obtenerRolesUsuarios().subscribe((roles) => {
      this.roles = roles;
    });
  }
}
