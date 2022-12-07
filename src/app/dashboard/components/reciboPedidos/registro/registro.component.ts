import { Component, OnInit } from '@angular/core';
import { PedidoIngService } from '../../../services/pedido-ing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoIngrediente } from '../../../interfaces/PedidoIngredientes.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  pedido!: PedidoIngrediente;
  estadosRecibo: any = [
    { id: 1, nombre: 'Buen Estado' },
    { id: 2, nombre: 'Con observaciones' },
    { id: 0, nombre: 'Rechazado' },
  ];

  formRegistroRecibo: FormGroup = this.fb.group({
    id_recibo: [],
    fecha_recibo: ['', [Validators.required]],
    cantidad: [0, [Validators.required]],
    estado: [0, [Validators.required]],
    id_pedido: [0, [Validators.required]],
    detalle: ['', [Validators.required]],
  });
  constructor(
    private servicioPedidos: PedidoIngService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
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

  registrarRecibo() {
    this.formRegistroRecibo.value.id_pedido = this.pedido.id_pedido;
    this.formRegistroRecibo.value.estado = parseInt(
      this.formRegistroRecibo.value.estado);
    console.log(this.formRegistroRecibo.value)
    this.servicioPedidos
      .registroReciboPedido(this.formRegistroRecibo.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res.msg === 'ok') {
          Swal.fire(
            'Se ha registrado el recibo',
            'El recibo se ha registrado con exito',
            'success'
          );
          this.router.navigateByUrl('/admin/recibos-pedidos/lista');
        }
      });
  }
}
