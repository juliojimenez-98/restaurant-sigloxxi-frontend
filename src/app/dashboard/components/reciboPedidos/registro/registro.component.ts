import { Component, OnInit } from '@angular/core';
import { PedidoIngService } from '../../../services/pedido-ing.service';
import { ActivatedRoute } from '@angular/router';
import { PedidoIngrediente } from '../../../interfaces/PedidoIngredientes.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  pedido!: PedidoIngrediente;
  estadosRecibo: any = [
    { id: 1, nombre: 'Buen Estado' },
    { id: 0, nombre: 'Rechazado' },
    { id: 0, nombre: 'Con observaciones' },
  ];
  constructor(
    private servicioPedidos: PedidoIngService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerPedidoIngPorId();
  }

  obtenerPedidoIngPorId() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let idPedido = parseInt(id);
      this.servicioPedidos
        .obtenerPedidoIngPorId(idPedido)
        .subscribe((res: any) => {
          this.pedido = res.pedidoFind;
          console.log(this.pedido);
        });
    });
  }
}
