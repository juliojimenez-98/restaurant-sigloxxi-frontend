import { Component, OnInit } from '@angular/core';
import { PedidoIngService } from '../../../services/pedido-ing.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  total: any = 0;
  constructor(private servicio: PedidoIngService) {}

  ngOnInit(): void {
    this.servicio.totalVentas().subscribe((res: any) => {
      this.total = res.totalVentas;
    });
  }
}
