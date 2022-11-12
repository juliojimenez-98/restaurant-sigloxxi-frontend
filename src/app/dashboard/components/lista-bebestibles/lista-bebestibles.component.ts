import { Component, OnInit } from '@angular/core';
import { Bebestible } from '../../interfaces/bebestible.interface';
import { BebestiblesService } from '../../services/bebestibles.service';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lista-bebestibles',
  templateUrl: './lista-bebestibles.component.html',
  styleUrls: ['./lista-bebestibles.component.css'],
})
export class ListaBebestiblesComponent implements OnInit {
  bebestibles: Bebestible[] = [];
  formBebestibles: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });
  limite: number = 0;
  desde: number = 10;
  btnActivo: boolean = false;

  constructor(private servicio: BebestiblesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.obtenerBebestibles();
  }

  obtenerBebestibles() {
    this.servicio.obtenerBebestible().subscribe((res) => {
      console.log(res);
      this.bebestibles = res;
    });
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
          this.obtenerBebestibles();
        });
        Swal.fire(
          'Borrado',
          'El bebestible ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }

  obtenerBebestiblesBuscar() {
    console.log(this.formBebestibles.value.nombre);
    this.servicio
      .getBebestiblesBuscar(this.formBebestibles.value.nombre)
      .subscribe((res) => {
        console.log(res);
        this.bebestibles = res;
      });
  }
}
