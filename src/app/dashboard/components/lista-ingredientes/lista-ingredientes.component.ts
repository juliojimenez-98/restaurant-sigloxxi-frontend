import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingrediente.interface';
import { IngredientesService } from '../../services/ingredientes.service';
import Swal from 'sweetalert2';

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

  eliminarIngrediente(id: any) {
    Swal.fire({
      title: 'Seguro quieres eliminar el Ingrediente?',
      text: 'Eliminarás el Ingrediente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarIngrediente(id).subscribe((res) => {
          this.obtenerIngredientes();
        });
        Swal.fire(
          'Borrado',
          'El ingrediente ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }
}
