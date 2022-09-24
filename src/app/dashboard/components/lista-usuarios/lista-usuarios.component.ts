import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  rolesUsuarios: any[] = [];
  esAdmin: boolean = false;
  esMesero: boolean = false;
  esCocinero: boolean = false;
  esFinanzas: boolean = false;
  esBodeguero: boolean = false;

  constructor(private servicio: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicio.obtenerUsuarios().subscribe((users) => {
      this.usuarios = users;
      this.usuarios.map((e) => {
        e.rolArray.map((r: any) => {
          this.rolesUsuarios = r;
          console.log(this.rolesUsuarios);
        });
      });
    });
  }

  eliminarUsuario(id: any) {
    Swal.fire({
      title: 'Seguro quieres eliminar al usuario?',
      text: 'Eliminarás el usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarUsuario(id).subscribe((res) => {
          this.obtenerUsuarios();
        });
        Swal.fire(
          'Borrado',
          'El usuario ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }
}
