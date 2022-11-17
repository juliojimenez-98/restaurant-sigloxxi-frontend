import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plato } from 'src/app/dashboard/interfaces/plato.interface';
import Swal from 'sweetalert2';
import { PlatosService } from '../../../services/platos.service';

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.component.html',
  styleUrls: ['./lista-platos.component.css'],
})
export class ListaPlatosComponent implements OnInit {
  platos: Plato[] = [];
  datosPlato: Plato[] = [];
  formPlatos: FormGroup = this.fb.group({
    nombre_prep: ['', [Validators.required]],
  });

  constructor(private servicio: PlatosService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.obtenerPlatos();
  }
  showModal = false;
  toggleModal(id: any) {
    this.servicio.obtenerPlatoPorId(id).subscribe((res) => {
      this.datosPlato = res.platoFind;
      console.log(this.datosPlato);
    });
  }

  obtenerPlatos() {
    this.servicio.obtenerPlatos().subscribe((res) => {
      console.log(res);
      this.platos = res;
    });
  }

  eliminarPlato(id: any) {
    Swal.fire({
      title: 'Seguro quieres eliminar el Plato?',
      text: 'Eliminarás el Plato',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarPlato(id).subscribe((res) => {
          this.obtenerPlatos();
        });
        Swal.fire(
          'Borrado',
          'El Plato ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }

  obtenerPlatosBuscar() {
    console.log(this.formPlatos.value.nombre_prep);
    this.servicio
      .getPlatosBuscar(this.formPlatos.value.nombre_prep)
      .subscribe((res) => {
        console.log(res);
        this.platos = res;
      });
  }
}
