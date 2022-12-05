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
  @Output() showModalPedido = new EventEmitter<boolean>();
  constructor(
    private servicio: CartaMesaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPedidoMesa();
  }

  agregarAlPedido() {
    this.showModalPedido.emit(false);
    console.log(this.showModalPedido);
  }

  pagarButton(id:any) {
    this.showModalPedido.emit(false);
    this.router.navigateByUrl(`/app-mesa/pago/${id}`)
  }

  obtenerPedidoMesa() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id_mesa'];
      let id_mesa = parseInt(id);
      this.servicio.obtenerPedidoMesa(id_mesa).subscribe((res) => {
        this.pedido = res;
        console.log(res)
      });
    });
  }
}
