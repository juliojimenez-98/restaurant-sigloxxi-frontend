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
    id_beb: [],
    nombre: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    stock_cri: ['', [Validators.required]],
    unidad: ['', [Validators.required, Validators.minLength(2)]],
    fecha_vencimiento: ['', Validators.required],
  })
;
  unidades: any[] = [
    { nombre: 'Unidad' },
    { nombre: 'Kilogramo' },
    { nombre: 'Litros' },
    { nombre: 'Botella 1L' },
    { nombre: 'Botella 5L' },
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
        Swal.close();
        if (res.msg === 'ok') {
          Swal.fire(
            'Bebestible Registrado',
            `El bebestible ${res.bebestible.nombre} fue registrado exitosamente`,
            'success'
          );
          this.router.navigateByUrl('/admin/bebestibles/lista-bebestibles');
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
    let id_beb = parseInt(id);
    if (id_beb) {
      this.servicioBeb
        .obtenerBebestiblePorId(id_beb)
        .subscribe((res: any) => {
          console.log(res);

          this.formRegistroBebestible.patchValue({
            id_beb: res.findBebestible.id_beb,
            nombre: res.findBebestible.nombre,
            stock: res.findBebestible.stock,
            stock_cri: res.findBebestible.stock_cri,
            unidad: res.findBebestible.unidad,
            fecha_vencimiento: res.findBebestible.fecha_vencimiento,
          });
          console.log(res);
          console.log(this.formRegistroBebestible.value.id_beb);
        });
    }
  });
}
actualizarBebestible() {
  this.activatedRoute.params.subscribe((params) => {
    let id = params['id'];
    let id_beb = parseInt(id);
    this.servicioBeb
      .actualizarBebestible(this.formRegistroBebestible.value, id_beb)
      .subscribe((res) => {
        console.log('respuesta', res);
        Swal.fire(
          'Bebestible actualizado',
          `Bebestible actualizado con exito`,
          'success'
        );
        this.router.navigateByUrl('/admin/bebestibles/lista-bebestibles');
      });
  });
}

}
