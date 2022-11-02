import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Bebestible } from '../../interfaces/bebestible.interface';


@Component({
  selector: 'app-registro-bebestibles',
  templateUrl: './registro-bebestibles.component.html',
  styleUrls: ['./registro-bebestibles.component.css']
})
export class RegistroBebestiblesComponent implements OnInit {
  formRegistroBebestible: FormGroup = this.fb.group({
    id_ing: [],
    nombre: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    stock_cri: ['', [Validators.required]],
    unidad: ['', [Validators.required, Validators.minLength(2)]],
    fecha_vencimiento: ['', Validators.required],
  });
  unidades: any[] = [
    { nombre: 'Unidad' },
    { nombre: 'Kilogramo' },
    { nombre: 'Litros' },
    { nombre: 'Botella 1L' },
    { nombre: 'Botella 5L' },
  ];
  constructor() { }

  ngOnInit(): void {

  }
  registrarBebestible() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando bebestible',
      showConfirmButton: false,
    });
  }
  actualizarBebestible() {

  }

}
