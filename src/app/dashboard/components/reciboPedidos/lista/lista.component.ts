import { Component, OnInit } from '@angular/core';
import { ReciboPedido } from '../../../interfaces/reciboPedido.iterface';
import { PedidoCliente } from '../../../../app-mesa/interfaces/pedidoCliente';
import { PedidoIngService } from '../../../services/pedido-ing.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  recibopedido: ReciboPedido[] = [];

  constructor(private servicio: PedidoIngService) {}

  ngOnInit(): void {
    this.obtenerRecibos;
  }

  obtenerRecibos() {
    this.servicio.obtenerRecibo().subscribe((res: any) => {
      this.recibopedido = res;
      console.log(res);
    });
  }
}
