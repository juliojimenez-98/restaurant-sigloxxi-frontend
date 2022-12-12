import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoCliente } from '../../interfaces/pedidoCliente';
import { CartaMesaService } from '../../services/carta-mesa.service';
import { Venta } from '../../interfaces/venta.interface';

@Component({
  selector: 'app-pagar-pedido',
  templateUrl: './pagar-pedido.component.html',
  styleUrls: ['./pagar-pedido.component.css'],
})
export class PagarPedidoComponent implements OnInit {
  pedido!: PedidoCliente;
  linkReturn: string = '';
  tokenReturn: string = '';
  showModal: boolean = false;
  tarjeta: boolean = false;
  efectivo: boolean = false;
  constructor(
    private servicio: CartaMesaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPedidoMesa();
  }

  obtenerPedidoMesa() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      let id_mesa = parseInt(id);
      this.servicio.obtenerPedidoMesa(id_mesa).subscribe((res) => {
        this.pedido = res;
        console.log(res);
        this.webpay();
      });
    });
  }

  webpay() {
    this.servicio
      .webPayPagar(this.pedido.total, this.pedido.id_orden)
      .subscribe((res: any) => {
        console.log(res.response);
        this.tokenReturn = res.response.token;
        this.linkReturn = res.response.url;
      });
  }
}
