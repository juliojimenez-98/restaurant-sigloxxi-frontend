import { Component, OnInit } from '@angular/core';
import { PedidoIngService } from '../../services/pedido-ing.service';
import { PedidoIngrediente } from '../../interfaces/PedidoIngredientes.interface';

@Component({
  selector: 'app-lista-pedidos-ingredientes',
  templateUrl: './lista-pedidos-ingredientes.component.html',
  styleUrls: ['./lista-pedidos-ingredientes.component.css'],
})
export class ListaPedidosIngredientesComponent implements OnInit {
  pedidoingredientes: PedidoIngrediente[] = [];
  constructor(private servicio: PedidoIngService) {}

  ngOnInit(): void {
    this.obtenerPedidosIng();
  }

  obtenerPedidosIng() {
    this.servicio.obtenerPedidoIng().subscribe((res: any) => {
      this.pedidoingredientes = res;
      console.log(res);
    });
  }
}
