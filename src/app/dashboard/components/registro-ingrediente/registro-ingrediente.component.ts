import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IngredientesService } from '../../services/ingredientes.service';
import { ActivatedRoute } from '@angular/router';
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
    // Sofia
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerIngredientesPorId();
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
              'Ingrediente registrado',
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

  // Sofía

  obtenerIngredientesPorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_ing = parseInt(id);
      if (id_ing) {
        this.servicioIng.obtenerIngredientesPorId(id_ing).subscribe((res: any) => { 
          this.formRegistroIngrediente.patchValue({
            id_ing: res.findIng.id_ing,
            nombre: res.findIng.nombre,
            stock: res.findIng.stock,
            stock_cri: res.findIng.stock_cri,
            fecha_vencimiento: res.finIg.fecha_vencimiento
          });
          console.log(res);
          console.log(this.formRegistroIngrediente.value.id_ing);
        });
      }
    });
  }
}
