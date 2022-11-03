import { Component, OnInit } from '@angular/core';
import { CartaMesaService } from '../../services/carta-mesa.service';
import { Plato } from '../../../dashboard/interfaces/plato.interface';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-mesa',
  templateUrl: './carta-mesa.component.html',
  styleUrls: ['./carta-mesa.component.css'],
})
export class CartaMesaComponent implements OnInit {
  showModalCart: boolean = false;
  showModalPedido: boolean = false;
  platos: Plato[] = [];
  platosArray: any[] = [];
  platosArrayInfo: Plato[] = [];
  platosStorage: Plato[] = [];
  horaInicio: string = '';
  horaFin: string = '';

  formRegistroPedidoCliente: FormGroup = this.fb.group({
    id_orden: [],
    tiempo_espera: ['', [Validators.required]],
    cant: [0, [Validators.required]],
    estado: ['', [Validators.required]],
    id_mesa: ['', [Validators.required]],
    platos: [],
  });
  constructor(
    private servicio: CartaMesaService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (localStorage.getItem('platosPedidos')) {
      this.showModalPedido = true;
      this.platosStorage = JSON.parse(localStorage.getItem('platosPedidos')!);
    }
  }

  ngOnInit(): void {
    this.obtenerPlatos();
  }
  obtenerPlatos() {
    this.servicio.obtenerPlatos().subscribe((res) => {
      console.log(res);
      this.platos = res;
    });
  }

  obtenerBebest() {
    this.servicio.obtenerPlatos().subscribe((res) => {
      console.log(res);
      this.platos = res;
    });
  }

  agregarAlPedido(id: any) {
    this.platosArray.push(id);
    console.log(this.platosArray);
  }

  agregarAlPedidoInfo(plato: Plato) {
    this.platosArrayInfo.push(plato);
    console.log(this.platosArrayInfo);
  }

  toggleModal() {
    this.showModalCart = !this.showModalCart;
  }

  borrarPlato(id: any) {
    var index = this.platosArrayInfo.indexOf(id);
    this.platosArrayInfo.splice(index, 1);

    var i = this.platosArray.indexOf(id);
    this.platosArray.splice(i, 1);
  }

  registrarPedidoCliente() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id_mesa'];
      let id_mesa = parseInt(id);
      this.formRegistroPedidoCliente.value.cant = this.platosArray.length;
      this.formRegistroPedidoCliente.value.tiempo_espera = 41;
      this.formRegistroPedidoCliente.value.id_mesa = id_mesa;
      this.formRegistroPedidoCliente.value.estado = 1;
      this.formRegistroPedidoCliente.value.platos = this.platosArray;

      this.servicio
        .registroPedidoCliente(this.formRegistroPedidoCliente.value)
        .subscribe((res: any) => {
          console.log(res);
          if (res.msg === 'ok') {
            this.showModalCart = false;
            Swal.fire(
              'Pedido ingresado',
              'Su pedido ya fue ingresado a la cocina, pronto se servirá en su mesa',
              'success'
            );
            localStorage.setItem(
              'platosPedidos',
              JSON.stringify(this.platosArrayInfo)
            );
            this.showModalPedido = true;
          }
        });
    });
  }
}
