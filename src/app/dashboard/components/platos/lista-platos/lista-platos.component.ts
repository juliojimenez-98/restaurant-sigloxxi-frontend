import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/dashboard/interfaces/plato.interface';
import { PlatosService } from '../../../services/platos.service';

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.component.html',
  styleUrls: ['./lista-platos.component.css'],
})
export class ListaPlatosComponent implements OnInit {
  platos: Plato[] = [];

  constructor(private servicio: PlatosService) {}

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
