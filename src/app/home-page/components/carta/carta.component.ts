import { Component, OnInit } from '@angular/core';
import { CartaService } from '../../services/carta.service';
import { Plato } from '../../../dashboard/interfaces/plato.interface';
import { Bebestible } from '../../../dashboard/interfaces/bebestible.interface';
import { BebestiblesService } from '../../../dashboard/services/bebestibles.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  platos: Plato[] = [];
  tragos: Plato[] = [];
  bebestibles: Bebestible[] = [];
  constructor(
    private servicio: CartaService,
    private servicioBebestible: BebestiblesService
  ) {}

  ngOnInit(): void {
    this.obtenerPlatos();
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
}
