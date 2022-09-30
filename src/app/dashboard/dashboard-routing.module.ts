import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { ListMesasComponent } from './components/list-mesas/list-mesas.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistroMesasComponent } from './components/registro-mesas/registro-mesas.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { RolesUsuariosComponent } from './components/roles-usuarios/roles-usuarios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MesasPageComponent } from './pages/mesas-page/mesas-page.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { IngredientesPageComponent } from './pages/ingredientes-page/ingredientes-page.component';
import { RegistroIngredienteComponent } from './components/registro-ingrediente/registro-ingrediente.component';
import { ListaIngredientesComponent } from './components/lista-ingredientes/lista-ingredientes.component';
import { RecetasPageComponent } from './pages/recetas-page/recetas-page.component';
import { ListaRecetaComponent } from './components/recetas/lista-receta/lista-receta.component';
import { RegistroRecetasComponent } from './components/recetas/registro-recetas/registro-recetas.component';
import { ModalMesaComponent } from './components/modal-mesa/modal-mesa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: 'dashboard', component: DashboardPageComponent },

          {
            path: 'usuarios',
            component: UsuariosComponent,
            children: [
              {
                path: 'registrar-usuarios',
                component: RegistroUsuariosComponent,
              },
              {
                path: 'registrar-usuarios/:id',
                component: RegistroUsuariosComponent,
              },
              {
                path: 'lista-usuarios',
                component: ListaUsuariosComponent,
              },
              {
                path: 'roles/:id',
                component: RolesUsuariosComponent,
              },
            ],
          },
          {
            path: 'ingredientes',
            component: IngredientesPageComponent,
            children: [
              {
                path: 'registro-ingredientes',
                component: RegistroIngredienteComponent,
              },
              {
                path: 'registro-ingredientes/:id',
                component: RegistroIngredienteComponent,
              },
              {
                path: 'lista-ingredientes',
                component: ListaIngredientesComponent,
              },
              {
                path: 'roles/:id',
                component: RolesUsuariosComponent,
              },
            ],
          },
          {
            path: 'mesas',
            component: MesasPageComponent,
            children: [
              { path: 'lista-mesas', component: ListMesasComponent },
              { path: 'registrar-mesa', component: RegistroMesasComponent },
              { path: 'ruta-scarlett', component: ModalMesaComponent },
            ],
          },

          {
            path: 'recetas',
            component: RecetasPageComponent,
            children: [
              { path: 'lista-recetas', component: ListaRecetaComponent },
              { path: 'registrar-receta', component: RegistroRecetasComponent },
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
