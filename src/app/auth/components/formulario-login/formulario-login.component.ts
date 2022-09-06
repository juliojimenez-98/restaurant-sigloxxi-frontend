import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css'],
})
export class FormularioLoginComponent {
  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Iniciando sesión...',
      showConfirmButton: false,
    });
    const { email, password } = this.formLogin.value;
    console.log(this.formLogin.value);
    this.authService.login(email, password).subscribe(
      (res: any) => {
        console.log(res);
        if (res.usuario) {
          Swal.close();
          this.router.navigateByUrl('admin/usuarios/registrar-usuarios');
        } else {
          Swal.close();
          Swal.fire('Error al iniciar sesion', 'error');
        }
      },
      (error) => {
        if (error.error.errors) {
          Swal.close();
          Swal.fire(
            'Error al iniciar sesion',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire('Error al iniciar sesion', `${error.error.msg} `, 'error');
        }
      }
    );
  }
}
