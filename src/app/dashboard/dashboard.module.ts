import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { MesasPageComponent } from './pages/mesas-page/mesas-page.component';
import { ListMesasComponent } from './components/list-mesas/list-mesas.component';
import { RegistroMesasComponent } from './components/registro-mesas/registro-mesas.component';

@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    UsuariosComponent,
    RegistroUsuariosComponent,
    ListaUsuariosComponent,
    MesasPageComponent,
    ListMesasComponent,
    RegistroMesasComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
