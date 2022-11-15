import { Component, OnInit } from '@angular/core';
import { CartaMesaService } from '../../services/carta-mesa.service';
import { Plato } from '../../../dashboard/interfaces/plato.interface';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PedidoCliente } from '../../interfaces/pedidoCliente';
import { BebestiblesService } from '../../../dashboard/services/bebestibles.service';
import { Bebestible } from '../../../dashboard/interfaces/bebestible.interface';

@Component({
  selector: 'app-carta-mesa',
  templateUrl: './carta-mesa.component.html',
  styleUrls: ['./carta-mesa.component.css'],
})
export class CartaMesaComponent implements OnInit {
  showModalCart: boolean = false;
  showModalPedido: boolean = false;
  bebestibles: Bebestible[] = [];
  platos: Plato[] = [];
  platosArray: any[] = [];
  platosArrayCant: any[] = [];
  platosArrayInfo: any[] = [];
  platosStorage: Plato[] = [];
  horaInicio: string = '';
  horaFin: string = '';
  pedido!: PedidoCliente;

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
    private router: Router,
    private servicioBebestible: BebestiblesService
  ) {}

  ngOnInit(): void {
    this.obtenerPlatos();
    this.obtenerPedidoMesa();
    this.obtenerBebest();
  }
  obtenerPlatos() {
    this.servicio.obtenerPlatos().subscribe((res) => {
      console.log(res);
      this.platos = res;
    });
  }

  obtenerBebest() {
    this.servicioBebestible.obtenerBebestible().subscribe((res) => {
      console.log(res);
      this.bebestibles = res;
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
    let counts = this.platosArrayInfo.reduce((acc, curr) => {
      const str = JSON.stringify(curr);
      acc[str] = (acc[str] || 0) + 1;
      return acc;
    }, {});
    Object.entries(counts).map((element) => {
      var array: any = [];
      array = element;
      var array2: any = [];
      array2 = JSON.parse(array[0]);
      element[0] = array2;
      this.platosArrayCant.push(element);
    });

    console.log(this.platosArrayCant);

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id_mesa'];
      let id_mesa = parseInt(id);
      this.formRegistroPedidoCliente.value.cant = this.platosArray.length;
      this.formRegistroPedidoCliente.value.tiempo_espera = 41;
      this.formRegistroPedidoCliente.value.id_mesa = id_mesa;
      this.formRegistroPedidoCliente.value.estado = 1;
      this.formRegistroPedidoCliente.value.platos = this.platosArrayCant;

      console.log(this.formRegistroPedidoCliente.value);

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
            this.showModalPedido = true;
          }
        });
    });
  }

  obtenerPedidoMesa() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id_mesa'];
      let id_mesa = parseInt(id);
      this.servicio.obtenerPedidoMesa(id_mesa).subscribe((res) => {
        this.pedido = res;
        if (!res) {
          console.log('No hay pedido activo');
        }
      });
    });
  }
}
