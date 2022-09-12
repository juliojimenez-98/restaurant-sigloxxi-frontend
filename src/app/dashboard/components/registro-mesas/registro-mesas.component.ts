import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-registro-mesas',
  templateUrl: './registro-mesas.component.html',
  styleUrls: ['./registro-mesas.component.css'],
})
export class RegistroMesasComponent {
  formRegistroMesa: FormGroup = this.fb.group({
    cant_sillas: ['', [Validators.required]],
  });
  constructor(private service: MesasService, private fb: FormBuilder) {}

  registroMesa() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando usuario',
      showConfirmButton: false,
    });
    this.service.registroMesa(this.formRegistroMesa.value).subscribe(
      (res: any) => {
        if (res.msg) {
          Swal.close();

          Swal.fire(
            'Usuario registrado',
            `La mesa ${res.mesa.id_mesa} fue exitosamente registrada`,
            'success'
          );
        }
        console.log(res);
      },
      (error: any) => {
        Swal.close();
        if (error.error.errors) {
          Swal.fire(
            'Error al registrar mesa',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire('Error al registrar mesa', `${error.error.msg} `, 'error');
        }
        console.log(error);
      }
    );
  }
}
