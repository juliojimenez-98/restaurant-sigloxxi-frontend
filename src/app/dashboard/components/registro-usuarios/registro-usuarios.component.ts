import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent {
  formRegistroUsuarios: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(2)]],
    rol: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) {}

  registroUsuarios() {
    //   const { rut, password } = this.formLogin.value;
    //    this.authService.login(rut, password).subscribe((ok) => {
    //      console.log(ok);
    // })
  }
}
