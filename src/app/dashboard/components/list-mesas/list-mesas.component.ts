import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa.interface';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-list-mesas',
  templateUrl: './list-mesas.component.html',
  styleUrls: ['./list-mesas.component.css'],
})
export class ListMesasComponent implements OnInit {
  mesas: Mesa[] = [];
  constructor(private service: MesasService) {}

  ngOnInit(): void {
    this.obtenerMesas();
  }

  obtenerMesas() {
    this.service.obtenerMesas().subscribe((mesasRes) => {
      this.mesas = mesasRes;
      console.log(this.mesas);
    });
  }
}
