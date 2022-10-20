import { Component, OnInit } from '@angular/core';
import { CartaService } from '../../services/carta.service';
import { Plato } from '../../../dashboard/interfaces/plato.interface';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  tragos: Plato[] = [];
  fondos: Plato[] = [];
  entradas: Plato[] = [];
  ensaladas: Plato[] = [];
  postres: Plato[] = [];
  constructor(private servicio: CartaService) {}

  ngOnInit(): void {
    this.obtenerTragos();
    this.obtenerEntradas();
    this.obtenerFondos();
  }
  obtenerFondos() {
    this.servicio.obtenerPlatos(1).subscribe((res) => {
      console.log(res);
      this.fondos = res;
    });
  }

  obtenerTragos() {
    this.servicio.obtenerPlatos(2).subscribe((res) => {
      console.log(res);
      this.tragos = res;
    });
  }

  obtenerEntradas() {
    this.servicio.obtenerPlatos(3).subscribe((res) => {
      console.log(res);
      this.entradas = res;
    });
  }
}
