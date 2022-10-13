import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  descuentos: any[] = [
    { valor: 0, nombre: 'Sin Descuento' },
    { valor: 0.05, nombre: '5%' },
    { valor: 0.1, nombre: '10%' },
    { valor: 0.15, nombre: '15%' },
    { valor: 0.2, nombre: '20%' },
    { valor: 0.25, nombre: '25%' },
    { valor: 0.3, nombre: '30%' },
    { valor: 0.35, nombre: '35%' },
    { valor: 0.4, nombre: '40%' },
    { valor: 0.45, nombre: '45%' },
    { valor: 0.5, nombre: '50%' },
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
    private servicioReceta: RecetasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerRecetas();
    this.obtenerPlatoPorId();
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

  obtenerPlatoPorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_plato = parseInt(id);
      if (id_plato) {
        this.servicio.obtenerPlatoPorId(id_plato).subscribe((res: any) => {
          console.log(res);

          this.formRegistroPlatos.patchValue({
            id_plato: res.platoFind.id_plato,
            desc: res.platoFind.desc,
            precio: res.platoFind.precio,
            estado: res.platoFind.estado,
            id_receta: res.platoFind.id_receta,
          });
        });
      }
    });
  }

  actualizarPlato() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_plato = parseInt(id);
      this.servicio
        .actualizarPlato(this.formRegistroPlatos.value, id_plato)
        .subscribe((res) => {
          console.log('respuesta', res);
          Swal.fire(
            'Plato actualizado',
            `Plato actualizado con exito`,
            'success'
          );
          this.router.navigateByUrl('/admin/platos/lista-platos');
        });
    });
  }
}
