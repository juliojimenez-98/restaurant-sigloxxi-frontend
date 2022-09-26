import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingrediente.interface';
import { IngredientesService } from '../../services/ingredientes.service';

@Component({
  selector: 'app-lista-ingredientes',
  templateUrl: './lista-ingredientes.component.html',
  styleUrls: ['./lista-ingredientes.component.css'],
})
export class ListaIngredientesComponent implements OnInit {
  ingredientes: Ingrediente[] = [];

  constructor(private servicio: IngredientesService) {}

  ngOnInit(): void {
    this.obtenerIngredientes();
  }

  obtenerIngredientes() {
    this.servicio.obtenerIngrediente().subscribe((res) => {
      this.ingredientes = res;
    });
  }

  eliminarIngrediente() {
    console.log('ELIMINAR INGREDIENTE');
  }
}
