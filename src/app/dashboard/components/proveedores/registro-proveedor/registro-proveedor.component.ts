import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProveedoresService } from '../../../services/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css'],
})
export class RegistroProveedorComponent implements OnInit {
  formRegistroProveedor: FormGroup = this.fb.group({
    id_proveedor: [],
    nombre: ['', [Validators.required]],
    tel_contacto: ['', [Validators.required]],
    email: ['', [Validators.required]],
    sitio_web: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private servicioPro: ProveedoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerProveedorPorId();
  }

  registrarProveedor() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando Proveedor',
      showConfirmButton: false,
    });
    this.servicioPro
      .registroProveedor(this.formRegistroProveedor.value)
      .subscribe(
        (res: any) => {
          Swal.close();
          if (res.msg === 'ok') {
            Swal.fire(
              'Proveedor Registrado',
              `El Proveedor ${res.proveedor.nombre} fue registrado exitosamente`,
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
              'Error al registrar proveedor',
              `${error.error.errors[0].msg} `,
              'error'
            );
          } else {
            Swal.fire(
              'Error al registrar proveedor',
              `${error.error.msg} `,
              'error'
            );
          }
        }
      );
  }

  obtenerProveedorPorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_proveedor = parseInt(id);
      if (id_proveedor) {
        this.servicioPro
          .obtenerProveedorPorId(id_proveedor)
          .subscribe((res: any) => {
            console.log(res);

            this.formRegistroProveedor.patchValue({
              id_proveedor: res.findProveedor.id_proveedor,
              nombre: res.findProveedor.nombre,
              tel_contacto: res.findProveedor.tel_contacto,
              email: res.findProveedor.email,
              sitio_web: res.findProveedor.sitio_web,
            });
            console.log(res);
            console.log(this.formRegistroProveedor.value.id_proveedor);
          });
      }
    });
  }

  actualizarProveedor() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_proveedor = parseInt(id);
      this.servicioPro
        .actualizarProveedor(this.formRegistroProveedor.value, id_proveedor)
        .subscribe((res) => {
          console.log('respuesta', res);
          Swal.fire(
            'Proveedor Actualizado',
            `Proveedor actualizado con exito`,
            'success'
          );
          this.router.navigateByUrl('/admin/proveedores/lista-proveedores');
        });
    });
  }
}
