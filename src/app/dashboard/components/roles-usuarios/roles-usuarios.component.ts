import { Component, OnInit } from '@angular/core';
import { Rol } from '../../interfaces/rol.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-roles-usuarios',
  templateUrl: './roles-usuarios.component.html',
  styleUrls: ['./roles-usuarios.component.css'],
})
export class RolesUsuariosComponent implements OnInit {
  roles: Rol[] = [];

  constructor(private servicio: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerRolesUsuarios();
  }

  obtenerRolesUsuarios() {
    this.servicio.obtenerRolesUsuarios().subscribe((roles) => {
      this.roles = roles;
    });
  }
}
