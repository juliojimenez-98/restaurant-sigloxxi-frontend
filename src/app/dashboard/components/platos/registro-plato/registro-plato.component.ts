import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/dashboard/interfaces/receta.interface';

@Component({
  selector: 'app-registro-plato',
  templateUrl: './registro-plato.component.html',
  styleUrls: ['./registro-plato.component.css']
})
export class RegistroPlatoComponent implements OnInit {
  receta: Receta[] = [];
  formRegistroPlatos: FormGroup = this.fb.group({
    id_plato: [],
    desc: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    id_receta: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private fb: FormBuilder,

  ) {}

  ngOnInit(): void {
  }

  // registroUsuarios() {
  //   Swal.fire({
  //     allowOutsideClick: false,
  //     icon: 'info',
  //     text: 'Registrando usuario',
  //     showConfirmButton: false,
  //   });
  //   this.arrayRoles.push(parseInt(this.formRegistroUsuarios.value.id_rol));
  //   this.formRegistroUsuarios.value.rolArray = this.arrayRoles;
  //   this.servicio.registroUsuarios(this.formRegistroUsuarios.value).subscribe(
  //     (res: any) => {
  //       if (res.msg) {
  //         Swal.close();

  //         Swal.fire(
  //           'Usuario registrado',
  //           `El usuario ${res.usuario.nombre} ${res.usuario.appa} fue exitosamente registrado`,
  //           'success'
  //         );
  //       }
  //     },
  //     (error) => {
  //       Swal.close();
  //       if (error.error.errors) {
  //         Swal.fire(
  //           'Error al registrar usuario',
  //           `${error.error.errors[0].msg} `,
  //           'error'
  //         );
  //       } else {
  //         Swal.fire(
  //           'Error al registrar usuario',
  //           `${error.error.msg} `,
  //           'error'
  //         );
  //       }
  //       console.log(error);
  //     }
  //   );
  // }
}
