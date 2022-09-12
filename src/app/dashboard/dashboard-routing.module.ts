import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMesasComponent } from './components/list-mesas/list-mesas.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistroMesasComponent } from './components/registro-mesas/registro-mesas.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MesasPageComponent } from './pages/mesas-page/mesas-page.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'usuarios',
            component: UsuariosComponent,
            children: [
              {
                path: 'registrar-usuarios',
                component: RegistroUsuariosComponent,
              },
              {
                path: 'lista-usuarios',
                component: ListaUsuariosComponent,
              },
            ],
          },
          {
            path: 'mesas',
            component: MesasPageComponent,
            children: [
              { path: 'lista-mesas', component: ListMesasComponent },
              { path: 'registrar-mesa', component: RegistroMesasComponent },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
