import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedor } from '../../../interfaces/proveedor.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css'],
})
export class ListaProveedoresComponent implements OnInit {
  proveedores: Proveedor[] = [];

  constructor(private servicio: ProveedoresService) {}

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.servicio.obtenerProveedores().subscribe((res) => {
      console.log(res);
      this.proveedores = res;
    });
  }

  eliminarProveedor(id: any) {
    Swal.fire({
      title: 'Seguro quieres eliminar el Proveedor?',
      text: 'Eliminarás el Proveedor',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarProveedor(id).subscribe((res) => {
          this.obtenerProveedores();
        });
        Swal.fire(
          'Borrado',
          'El Proveedor ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }
}
