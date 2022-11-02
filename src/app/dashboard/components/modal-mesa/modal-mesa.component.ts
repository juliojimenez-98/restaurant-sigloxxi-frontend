import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mesa } from '../../interfaces/mesa.interface';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-modal-mesa',
  templateUrl: './modal-mesa.component.html',
  styleUrls: ['./modal-mesa.component.css'],
})
export class ModalMesaComponent implements OnInit {
  mesas: Mesa[] = [];
  disponibilidad: Mesa[] = [];

  constructor(private service: MesasService) {}

  ngOnInit(): void {
    this.obtenerMesas();
  }
  obtenerMesas() {
    this.service.obtenerMesas().subscribe((res: any) => {
      this.mesas = res;
    });
  }

  detalleMesa(id: number) {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Seleccionar detalle',
      showConfirmButton: false,
    });
  }
}
