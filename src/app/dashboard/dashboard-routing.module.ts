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
import { PlatosPageComponent } from './pages/platos-page/platos-page.component';
import { ListaPlatosComponent } from './components/platos/lista-platos/lista-platos.component';
import { RegistroPlatoComponent } from './components/platos/registro-plato/registro-plato.component';
import { ListaProveedoresComponent } from './components/proveedores/lista-proveedores/lista-proveedores.component';
import { RegistroProveedorComponent } from './components/proveedores/registro-proveedor/registro-proveedor.component';
import { ActualizarImagenComponent } from './components/platos/actualizar-imagen/actualizar-imagen.component';
import { DetalleModalMesaComponent } from './components/detalle-modal-mesa/detalle-modal-mesa.component';
import { ListaPedidosIngredientesComponent } from './components/lista-pedidos-ingredientes/lista-pedidos-ingredientes.component';
import { RegistrarPedidosIngredientesComponent } from './components/registrar-pedidos-ingredientes/registrar-pedidos-ingredientes.component';
import { BebestiblesPageComponent } from './pages/bebestibles-page/bebestibles-page.component';
import { ListaBebestiblesComponent } from './components/lista-bebestibles/lista-bebestibles.component';

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
              { path: 'vista-mesero', component: ModalMesaComponent },
              {
                path: 'detalle-mesas/:id',
                component: DetalleModalMesaComponent,
              },
              { path: 'detalle-mesas', component: DetalleModalMesaComponent },
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
          {
            path: 'platos',
            component: PlatosPageComponent,
            children: [
              { path: 'lista-platos', component: ListaPlatosComponent },
              { path: 'registrar-plato', component: RegistroPlatoComponent },
              {
                path: 'registrar-plato/:id',
                component: RegistroPlatoComponent,
              },
              {
                path: 'actualizar-imagen/:id',
                component: ActualizarImagenComponent,
              },
            ],
          },
          {
            path: 'proveedores',
            component: PlatosPageComponent,
            children: [
              {
                path: 'lista-proveedores',
                component: ListaProveedoresComponent,
              },
              {
                path: 'registrar-proveedor',
                component: RegistroProveedorComponent,
              },
              {
                path: 'registrar-proveedor/:id',
                component: RegistroProveedorComponent,
              },
            ],
          },
          {
            path: 'pedidos-ingredientes',
            component: PlatosPageComponent,
            children: [
              {
                path: 'lista',
                component: ListaPedidosIngredientesComponent,
              },
              {
                path: 'registro',
                component: RegistrarPedidosIngredientesComponent,
              },
              {
                path: 'registro/:id',
                component: RegistrarPedidosIngredientesComponent,
              },
            ],
          },
          {
            path: 'bebestibles',
            component: BebestiblesPageComponent,
            children: [
              {
                path: 'lista',
                component: ListaBebestiblesComponent,
              },
              {
                path: 'registro',
                component: RegistrarPedidosIngredientesComponent,
              },
              {
                path: 'registro/:id',
                component: RegistrarPedidosIngredientesComponent,
              },
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
