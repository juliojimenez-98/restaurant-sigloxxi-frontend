import { Component, OnInit } from '@angular/core';
import { CartaService } from '../../../home-page/services/carta.service';
import { CartaMesaService } from '../../services/carta-mesa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoCliente } from '../../interfaces/pedidoCliente';
import Swal from 'sweetalert2';
import { Venta } from '../../interfaces/venta.interface';

@Component({
  selector: 'app-pagado',
  templateUrl: './pagado.component.html',
  styleUrls: ['./pagado.component.css'],
})
export class PagadoComponent implements OnInit {
  pedido?: PedidoCliente;
  venta: Venta = {
    id_orden: 0,
    monto: 0,
    id_pago: 1,
  };
  constructor(
    private service: CartaMesaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPedidoPagado();
  }

  obtenerPedidoPagado() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_pedido = parseInt(id);
      this.service.getPedidoById(id_pedido).subscribe((res) => {
        this.pedido = res;
      });
    });
  }

  crearVenta() {
    this.venta.id_orden = this.pedido!.id_orden!;
    this.venta.monto = this.pedido!.total!;

    this.service.registroVenta(this.venta).subscribe((res: any) => {
      if (res.msg === 'ok') {
        console.log('venta creada');
      }
    });
  }

  cerrarPedido() {
    localStorage.removeItem('pedidoActivo');
    this.service
      .actualizarEstadoPedido(this.pedido?.id_orden, 0)
      .subscribe((res) => {
        if (res.msg === 'ok') {
          this.router.navigateByUrl(`/app-mesa/carta/${this.pedido?.id_mesa}`);
          Swal.fire('Muchas Gracias', 'Vuelve pronto', 'success');
          this.crearVenta();
        }
      });
  }
}
