import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Mesa} from 'c:/Users/scarlet/restaurant-sigloxxi-frontend/src/app/dashboard/interfaces/mesa.interface';

@Component({
  selector: 'app-modal-mesa',
  templateUrl: './modal-mesa.component.html',
  styleUrls: ['./modal-mesa.component.css']
})
export class ModalMesaComponent implements OnInit {
  mesa: Mesa[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  detalleMesa() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Seleccionar detalle',
      showConfirmButton: false,
    });
  }

}
