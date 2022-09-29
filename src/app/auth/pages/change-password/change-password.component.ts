import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  formChangePass: FormGroup = this.fb.group({
    password1: ['', [Validators.required]],
    password2: ['', [Validators.required]],
  });
  raw: any = {
    password: '',
  };
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changePassword() {
    let user: any = localStorage.getItem('usuario');
    let usuarioParse: any = JSON.parse(user);
    console.log(usuarioParse.id_user);

    if (
      this.formChangePass.value.password1 ===
      this.formChangePass.value.password2
    ) {
      this.raw.password = this.formChangePass.value.password2;
      this.service
        .cambiarPassword(this.raw, usuarioParse.id_user)
        .subscribe((res: any) => {
          if (res.status) {
            Swal.fire(
              'Se cambió la contraseña',
              'Se ha cambiado la contraseña, ahora puedes entrar al sistema con tu nueva contraseña',
              'success'
            );
            localStorage.clear();
            this.router.navigateByUrl('auth/login');
          }
        });
    } else {
      Swal.fire('Error', 'Las contraseñas no son iguales', 'error');
    }
  }
}
