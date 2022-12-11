import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/dashboard/interfaces/mesa.interface';
import { MesasService } from 'src/app/dashboard/services/mesas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mesas-clientes',
  templateUrl: './mesas-clientes.component.html',
  styleUrls: ['./mesas-clientes.component.css'],
})
export class MesasClientesComponent implements OnInit {
  mesas: Mesa[] = [];
  mesaSeleccionada: Mesa = {
    id_mesa: 0,
    cant_sillas: 0,
    disponibilidad: 0,
  };
  showModal = false;

  constructor(private service: MesasService) {}

  ngOnInit(): void {
    this.obtenerMesas();
  }
  toggleModal(mesa: Mesa) {
    this.showModal = !this.showModal;
    this.mesaSeleccionada = mesa;
  }
  obtenerMesas() {
    this.service.obtenerMesas().subscribe((mesasRes) => {
      this.mesas = mesasRes;
      console.log(this.mesas);
    });
  }

  actualizarMesa() {
    this.service
      .actualizarMesa(this.mesaSeleccionada.id_mesa, 1)
      .subscribe((mesasRes) => {
        console.log(mesasRes);
        Swal.fire('Seleccionar Mesa', 'Puede pasar a sentarse', 'success');
      });
  }
}
