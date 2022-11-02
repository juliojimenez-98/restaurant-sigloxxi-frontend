import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { PedidoIngService } from '../../services/pedido-ing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ProveedoresService } from '../../services/proveedores.service';
import { IngredientesService } from '../../services/ingredientes.service';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { Ingrediente } from '../../interfaces/ingrediente.interface';

@Component({
  selector: 'app-registrar-pedidos-ingredientes',
  templateUrl: './registrar-pedidos-ingredientes.component.html',
  styleUrls: ['./registrar-pedidos-ingredientes.component.css'],
})
export class RegistrarPedidosIngredientesComponent implements OnInit {
  proveedores: Proveedor[] = [];
  ingredientes: Ingrediente[] = [];
  formRegistroPedidoIng: FormGroup = this.fb.group({
    id_pedido: [],
    fecha_despacho: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    id_proveedor: ['', [Validators.required]],
    id_ing: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPedido: PedidoIngService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private servicioProveedor: ProveedoresService,
    private servicioIngrediente: IngredientesService
  ) {}

  ngOnInit(): void {
    this.obtenerProveedores();
    this.obtenerIngredientes();
  }

  registrarPedidoIng() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando Pedido Ingrediente',
      showConfirmButton: false,
    });
    this.servicioPedido
      .registroPedidoIng(this.formRegistroPedidoIng.value)
      .subscribe(
        (res: any) => {
          Swal.close();
          if (res.msg === 'ok') {
            Swal.fire(
              'Pedido de Ingrediente Registrado',
              `El Pedido de Ingrediente fue registrado exitosamente`,
              'success'
            );
            this.router.navigateByUrl('/admin/pedidos-ingredientes/lista');
            console.log(res);
          }
        },
        (error) => {
          Swal.close();
          console.log(error);
          if (error.error.errors) {
            Swal.fire(
              'Error al registrar Pedido Ingrediente',
              `${error.error.errors[0].msg} `,
              'error'
            );
          } else {
            Swal.fire(
              'Error al registrar Pedido Ingrediente',
              `${error.error.msg} `,
              'error'
            );
          }
        }
      );
  }

  obtenerProveedores() {
    this.servicioProveedor.obtenerProveedores().subscribe((res) => {
      this.proveedores = res;
    });
  }

  obtenerIngredientes() {
    this.servicioIngrediente.obtenerIngrediente().subscribe((res) => {
      this.ingredientes = res;
    });
  }

  // obtenerPedidoIngPorId() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     let id = params['id'];
  //     let id_pedido = parseInt(id);
  //     if (id_pedido) {
  //       this.servicioPedido
  //         .obtenerPedidoIngPorId(id_pedido)
  //         .subscribe((res: any) => {
  //           console.log(res);

  //           this.formRegistroPedidoIng.patchValue({
  //             // id_pedido: res.findIngrediente.id_ing,
  //             // nombre: res.findIngrediente.nombre,
  //             // stock: res.findIngrediente.stock,
  //             // stock_cri: res.findIngrediente.stock_cri,
  //             // unidad: res.findIngrediente.unidad,
  //             // fecha_vencimiento: res.findIngrediente.fecha_vencimiento,
  //           });
  //           console.log(res);
  //           console.log(this.formRegistroPedidoIng.value.id_pedido);
  //         });
  //     }
  //   });
  // }
}
