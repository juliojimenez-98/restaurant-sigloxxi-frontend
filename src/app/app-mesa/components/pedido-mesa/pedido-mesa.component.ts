import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plato } from 'src/app/dashboard/interfaces/plato.interface';
import { PedidoCliente } from '../../interfaces/pedidoCliente';
import { CartaMesaService } from '../../services/carta-mesa.service';

@Component({
  selector: 'app-pedido-mesa',
  templateUrl: './pedido-mesa.component.html',
  styleUrls: ['./pedido-mesa.component.css'],
})
export class PedidoMesaComponent implements OnInit {
  pedido!: PedidoCliente;
  platosStorage: any[] = [];
  @Input() platosPedidos: Plato[] = [];
  @Output() showModalPedido = new EventEmitter<boolean>();
  constructor(
    private servicio: CartaMesaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (localStorage.getItem('platosPedidos')) {
      this.platosStorage = JSON.parse(localStorage.getItem('platosPedidos')!);
    }
  }

  ngOnInit(): void {
    this.obtenerPedidoMesa();
    this.platosPedidos;
    console.log(this.platosStorage);
  }

  agregarAlPedido() {
    this.showModalPedido.emit(false);
    console.log(this.showModalPedido);
  }

  obtenerPedidoMesa() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id_mesa'];
      let id_mesa = parseInt(id);
      this.servicio.obtenerPedidoMesa(id_mesa).subscribe((res) => {
        this.pedido = res;
        console.log(res);
      });
    });
  }
}
