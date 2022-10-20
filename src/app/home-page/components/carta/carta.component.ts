import { Component, OnInit } from '@angular/core';
import { CartaService } from '../../services/carta.service';
import { Plato } from '../../../dashboard/interfaces/plato.interface';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  platos: Plato[] = [];
  tragos: Plato[] = [];
  constructor(private servicio: CartaService) {}

  ngOnInit(): void {
    this.obtenerPlatos();
  }
  obtenerPlatos() {
    this.servicio.obtenerPlatos().subscribe((res) => {
      console.log(res);
      this.platos = res;
    });
  }
}
