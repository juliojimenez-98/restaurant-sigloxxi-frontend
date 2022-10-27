import { Component, OnInit } from '@angular/core';
import { CartaMesaService } from '../../services/carta-mesa.service';
import { Plato } from '../../../dashboard/interfaces/plato.interface';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-carta-mesa',
  templateUrl: './carta-mesa.component.html',
  styleUrls: ['./carta-mesa.component.css'],
})
export class CartaMesaComponent implements OnInit {
  showModalCart: boolean = false;
  platos: Plato[] = [];
  platosArray: any[] = [];
  platosArrayInfo: Plato[] = [];
  horaInicio: string = '';
  horaFin: string = '';

  formRegistroReceta: FormGroup = this.fb.group({
    id_orden: [],
    tiempo_espera: ['', [Validators.required]],
    cant: [0, [Validators.required]],
    estado: ['', [Validators.required]],
    id_mesa: ['', [Validators.required]],
    platos: [],
  });
  constructor(private servicio: CartaMesaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.obtenerPlatos();
  }
  obtenerPlatos() {
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

  registrarPedidoCliente() {}
}
