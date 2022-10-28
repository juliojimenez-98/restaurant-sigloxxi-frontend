import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar-pedidos-ingredientes',
  templateUrl: './registrar-pedidos-ingredientes.component.html',
  styleUrls: ['./registrar-pedidos-ingredientes.component.css'],
})
export class RegistrarPedidosIngredientesComponent implements OnInit {
  formRegistroPedidoIng: FormGroup = this.fb.group({
    id_pedido: [],
    fecha_despacho: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
