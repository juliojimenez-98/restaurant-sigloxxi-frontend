import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from '../../interfaces/rol.interface';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent {
  roles: Rol[] = [
    {
      id_rol: 1,
      nom_rol: 'ADMIN_ROL',
    },
    {
      id_rol: 2,
      nom_rol: 'MESERO_ROL',
    },
  ];
  formRegistroUsuarios: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(2)]],
    id_rol: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) {}

  registroUsuarios() {
    //   const { rut, password } = this.formLogin.value;
    //    this.authService.login(rut, password).subscribe((ok) => {
    //      console.log(ok);
    // })
    console.log(this.formRegistroUsuarios);
  }
}
