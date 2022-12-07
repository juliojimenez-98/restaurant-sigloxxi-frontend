import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mesa } from '../../interfaces/mesa.interface';
import { MesasService } from '../../services/mesas.service';
import { Plato } from 'src/app/dashboard/interfaces/plato.interface';
import { PedidoCliente } from 'src/app/app-mesa/interfaces/pedidoCliente';
import { CartaMesaService } from 'src/app/app-mesa/services/carta-mesa.service';

@Component({
  selector: 'app-modal-mesa',
  templateUrl: './modal-mesa.component.html',
  styleUrls: ['./modal-mesa.component.css'],
})
export class ModalMesaComponent implements OnInit {
  mesas: Mesa[] = [];
  pedido!: PedidoCliente;
  mesaSeleccionada: Mesa = {
    id_mesa: 0,
    cant_sillas: 0,
    disponibilidad: 0,
  };
  showModal = false;
  disponibilidad: Mesa[] = [];

  constructor(private service: MesasService, private service2: CartaMesaService) {}

  ngOnInit(): void {
    this.obtenerMesas();
  }
  toggleModal(mesa: Mesa) {
    this.showModal = !this.showModal;
    this.mesaSeleccionada = mesa;
    this.obtenerPedidoPorMesa()
  }
  obtenerMesas() {
    this.service.obtenerMesas().subscribe((res: any) => {
      this.mesas = res;
    });
  }

  obtenerPedidoPorMesa() {
    this.service2
      .obtenerPedidoMesa(this.mesaSeleccionada.id_mesa)
      .subscribe((res: any) => {
        this.pedido = res;
        console.log(this.pedido)
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
