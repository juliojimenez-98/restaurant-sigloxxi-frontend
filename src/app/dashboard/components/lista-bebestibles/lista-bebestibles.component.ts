import { Component, OnInit } from '@angular/core';
import { Bebestible } from '../../interfaces/bebestible.interface';
import { BebestiblesService } from '../../services/bebestibles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-bebestibles',
  templateUrl: './lista-bebestibles.component.html',
  styleUrls: ['./lista-bebestibles.component.css']
})
export class ListaBebestiblesComponent implements OnInit {
  bebestibles: Bebestible[] = [];
  limite: number = 0;
  desde: number = 10;
  btnActivo: boolean = false;

  constructor(private servicio: BebestiblesService) { }

  ngOnInit(): void {
    this.obtenerBebestiblesPaginado();
  }

  obtenerBebestiblesPaginado() {
    this.servicio
      .obtenerBebestiblePaginado(this.limite, this.desde)
      .subscribe((res) => {
        this.bebestibles = res;
        if (this.bebestibles.length === 0) {
          this.btnActivo = false;
        }
      });
  }
  btnSiguiente(valor: number) {
    this.limite = this.limite + valor;
    this.obtenerBebestiblesPaginado();
    console.log(this.limite);
  }
  btnAnterior(valor: number) {
    this.limite = this.limite - valor;
    this.obtenerBebestiblesPaginado();
    console.log(this.limite);
    if (this.limite === 0) {
      this.btnActivo = false;
    }
    if (this.limite > 0) {
      this.btnActivo = true;
    }
  }

  eliminarBebestible(id: any) {
    Swal.fire({
      title: 'Seguro quieres eliminar el Bebestible?',
      text: 'Eliminarás el Bebestible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarBebestible(id).subscribe((res) => {
          this.obtenerBebestiblesPaginado();
        });
        Swal.fire(
          'Borrado',
          'El bebestible ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }

}
