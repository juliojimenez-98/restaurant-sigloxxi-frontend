import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IngredientesService } from '../../services/ingredientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-registro-ingrediente',
  templateUrl: './registro-ingrediente.component.html',
  styleUrls: ['./registro-ingrediente.component.css'],
})
export class RegistroIngredienteComponent implements OnInit {
  formRegistroIngrediente: FormGroup = this.fb.group({
    id_ing: [],
    nombre: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    stock_cri: ['', [Validators.required]],
    unidad: ['', [Validators.required, Validators.minLength(2)]],
    fecha_vencimiento: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private servicioIng: IngredientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerIngredientePorId();
  }

  registrarIngrediente() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando ingrediente',
      showConfirmButton: false,
    });
    this.servicioIng
      .registroIngrediente(this.formRegistroIngrediente.value)
      .subscribe(
        (res: any) => {
          Swal.close();
          if (res.msg === 'ok') {
            Swal.fire(
              'Ingrediente Registrado',
              `El ingrediente ${res.ingrediente.nombre} fue registrado exitosamente`,
              'success'
            );
            console.log(res);
          }
        },
        (error) => {
          Swal.close();
          console.log(error);
          if (error.error.errors) {
            Swal.fire(
              'Error al registrar usuario',
              `${error.error.errors[0].msg} `,
              'error'
            );
          } else {
            Swal.fire(
              'Error al registrar usuario',
              `${error.error.msg} `,
              'error'
            );
          }
        }
      );
  }

  obtenerIngredientePorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_ing = parseInt(id);
      if (id_ing) {
        this.servicioIng
          .obtenerIngredientePorId(id_ing)
          .subscribe((res: any) => {
            console.log(res);

            this.formRegistroIngrediente.patchValue({
              id_ing: res.findIngrediente.id_ing,
              nombre: res.findIngrediente.nombre,
              stock: res.findIngrediente.stock,
              stock_cri: res.findIngrediente.stock_cri,
              unidad: res.findIngrediente.unidad,
              fecha_vencimiento: res.findIngrediente.fecha_vencimiento,
            });
            console.log(res);
            console.log(this.formRegistroIngrediente.value.id_ing);
          });
      }
    });
  }

  actualizarIngrediente() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_ing = parseInt(id);
      this.servicioIng
        .actualizarIngrediente(this.formRegistroIngrediente.value, id_ing)
        .subscribe((res) => {
          console.log('respuesta', res);
          Swal.fire(
            'Ingrediente actualizado',
            `Ingrediente actualizado con exito`,
            'success'
          );
          this.router.navigateByUrl('/admin/ingredientes/lista-ingredientes');
        });
    });
  }
}
