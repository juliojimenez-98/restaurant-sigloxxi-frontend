import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Bebestible } from '../../interfaces/bebestible.interface';
import { BebestiblesService } from '../../services/bebestibles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-registro-bebestibles',
  templateUrl: './registro-bebestibles.component.html',
  styleUrls: ['./registro-bebestibles.component.css']
})
export class RegistroBebestiblesComponent implements OnInit {
  formRegistroBebestible: FormGroup = this.fb.group({
    id_bebida: [],
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    stock_cri: ['', [Validators.required]],
    unidad: ['', [Validators.required, Validators.minLength(2)]],
    fecha_vencimiento: ['', Validators.required],
  })
;
  unidades: any[] = [
    { nombre: 'Onza' },
    { nombre: 'Mililitro' },
    { nombre: '1 Lata' },
    { nombre: 'pack Lata(6)' },
    { nombre: 'botella express' },
    { nombre: 'Litros' },
    { nombre: 'Botella 1L' },
    { nombre: 'Botella 2L' },
  ];
  constructor( 
    private fb: FormBuilder,
    private servicioBeb: BebestiblesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) 
  { }

  ngOnInit(): void {
    this.obtenerBebestiblePorId();

  }
  registrarBebestible() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando bebestible',
      showConfirmButton: false,
    });
    this.servicioBeb
    .registroBebestible(this.formRegistroBebestible.value)
    .subscribe(
      (res: any) => {
        console.log(res)
        Swal.close();
        if (res.msg === 'ok') {
          Swal.fire(
            'Bebestible Registrado',
            `El bebestible ${res.bebestibles.nombre} fue registrado exitosamente`,
            'success'
          );
          this.router.navigateByUrl('/admin/bebestibles/lista');
          console.log(res);
        }
      },
      (error) => {
        Swal.close();
        console.log(error);
        if (error.error.errors) {
          Swal.fire(
            'Error al registrar Bebestible',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire(
            'Error al registrar Bebestible',
            `${error.error.msg} `,
            'error'
          );
        }
      }
    );
    
}
obtenerBebestiblePorId() {
  this.activatedRoute.params.subscribe((params) => {
    let id = params['id'];
    let id_bebida = parseInt(id);
    if (id_bebida) {
      this.servicioBeb
        .obtenerBebestiblePorId(id_bebida)
        .subscribe((res: any) => {
          console.log(res);

          this.formRegistroBebestible.patchValue({
            id_bebida: res.bebestible.id_bebida,
            nombre: res.bebestible.nombre,
            precio: res.bebestible.precio,
            stock: res.bebestible.stock,
            stock_cri: res.bebestible.stock_cri,
            unidad: res.bebestible.unidad,
            fecha_vencimiento: res.bebestible.fecha_vencimiento,
          });
          console.log(res);
          console.log(this.formRegistroBebestible.value.id_bebida);
        });
    }
  });
}
actualizarBebestible() {
  this.activatedRoute.params.subscribe((params) => {
    let id = params['id'];
    let id_bebida = parseInt(id);
    this.servicioBeb
      .actualizarBebestible(this.formRegistroBebestible.value, id_bebida)
      .subscribe((res) => {
        console.log('respuesta', res);
        Swal.fire(
          'Bebestible actualizado',
          `Bebestible actualizado con exito`,
          'success'
        );
        this.router.navigateByUrl('/admin/bebestibles/lista');
      });
  });
}

}
