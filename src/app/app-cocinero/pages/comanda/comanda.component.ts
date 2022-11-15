import { Component, OnInit } from '@angular/core';
import { CartaMesaService } from 'src/app/app-mesa/services/carta-mesa.service';
import { PedidoCliente } from '../../../app-mesa/interfaces/pedidoCliente';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css'],
})
export class ComandaComponent implements OnInit {
  pedidos: PedidoCliente[] = [];

  constructor(private servicio: CartaMesaService) {}

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.servicio.obtenerPedidos().subscribe((res) => {
      console.log(res);
      this.pedidos = res;
    });
  }
}
