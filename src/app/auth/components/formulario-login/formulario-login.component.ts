import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css'],
})
export class FormularioLoginComponent {
  formLogin: FormGroup = this.fb.group({
    rut: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  login() {
    const { rut, password } = this.formLogin.value;
    this.authService.login(rut, password).subscribe((ok) => {
      console.log(ok);
    });
  }
}
