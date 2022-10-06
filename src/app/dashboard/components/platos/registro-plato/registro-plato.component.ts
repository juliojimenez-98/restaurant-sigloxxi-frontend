import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/dashboard/interfaces/receta.interface';
import { PlatosService } from 'src/app/dashboard/services/platos.service';
import Swal from 'sweetalert2';
import { RecetasService } from '../../../services/recetas.service';

@Component({
  selector: 'app-registro-plato',
  templateUrl: './registro-plato.component.html',
  styleUrls: ['./registro-plato.component.css'],
})
export class RegistroPlatoComponent implements OnInit {
  recetas: Receta[] = [];
  estados: any[] = [
    { id: 0, nombre: 'Inactivo' },
    { id: 1, nombre: 'Activo' },
    { id: 2, nombre: 'Descuento' },
  ];

  formRegistroPlatos: FormGroup = this.fb.group({
    id_plato: [],
    desc: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    id_receta: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private fb: FormBuilder,
    private servicio: PlatosService,
    private servicioReceta: RecetasService
  ) {}

  ngOnInit(): void {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.servicioReceta.obtenerRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  registroPlatos() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando Plato',
      showConfirmButton: false,
    });

    this.servicio.registroPlatos(this.formRegistroPlatos.value).subscribe(
      (res: any) => {
        console.log(res);
        if (res.msg) {
          Swal.close();

          Swal.fire(
            'Plato registrado',
            `El Plato fue exitosamente registrado`,
            'success'
          );
        }
      },
      (error) => {
        Swal.close();
        if (error.error.errors) {
          Swal.fire(
            'Error al registrar plato',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire('Error al registrar plato', `${error.error.msg} `, 'error');
        }
        console.log(error);
      }
    );
  }
}
