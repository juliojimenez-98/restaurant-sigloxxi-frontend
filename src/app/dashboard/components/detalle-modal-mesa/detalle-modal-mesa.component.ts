import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa.interface';

@Component({
  selector: 'app-detalle-modal-mesa',
  templateUrl: './detalle-modal-mesa.component.html',
  styleUrls: ['./detalle-modal-mesa.component.css']
})
export class DetalleModalMesaComponent implements OnInit {
  mesa: Mesa[] = [];
  disponibilidad: Mesa[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
