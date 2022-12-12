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
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { RolesUsuariosComponent } from './components/roles-usuarios/roles-usuarios.component';
import { IngredientesPageComponent } from './pages/ingredientes-page/ingredientes-page.component';
import { RegistroIngredienteComponent } from './components/registro-ingrediente/registro-ingrediente.component';
import { ListaIngredientesComponent } from './components/lista-ingredientes/lista-ingredientes.component';
import { RecetasPageComponent } from './pages/recetas-page/recetas-page.component';
import { RegistroRecetasComponent } from './components/recetas/registro-recetas/registro-recetas.component';
import { ListaRecetaComponent } from './components/recetas/lista-receta/lista-receta.component';
import { ModalMesaComponent } from './components/modal-mesa/modal-mesa.component';
import { PlatosPageComponent } from './pages/platos-page/platos-page.component';
import { ListaPlatosComponent } from './components/platos/lista-platos/lista-platos.component';
import { RegistroPlatoComponent } from './components/platos/registro-plato/registro-plato.component';
import { ProveedoresPageComponent } from './pages/proveedores-page/proveedores-page.component';
import { ListaProveedoresComponent } from './components/proveedores/lista-proveedores/lista-proveedores.component';
import { RegistroProveedorComponent } from './components/proveedores/registro-proveedor/registro-proveedor.component';
import { ActualizarImagenComponent } from './components/platos/actualizar-imagen/actualizar-imagen.component';
import { DetalleModalMesaComponent } from './components/detalle-modal-mesa/detalle-modal-mesa.component';
import { PedidosIngredientesComponent } from './pages/pedidos-ingredientes/pedidos-ingredientes.component';
import { RegistrarPedidosIngredientesComponent } from './components/registrar-pedidos-ingredientes/registrar-pedidos-ingredientes.component';
import { ListaPedidosIngredientesComponent } from './components/lista-pedidos-ingredientes/lista-pedidos-ingredientes.component';
import { ListaBebestiblesComponent } from './components/lista-bebestibles/lista-bebestibles.component';
import { RegistroBebestiblesComponent } from './components/registro-bebestibles/registro-bebestibles.component';
import { BebestiblesPageComponent } from './pages/bebestibles-page/bebestibles-page.component';
import { ReciboPedidosPageComponent } from './pages/recibo-pedidos-page/recibo-pedidos-page.component';
import { ListaComponent } from './components/reciboPedidos/lista/lista.component';
import { RegistroComponent } from './components/reciboPedidos/registro/registro.component';
import { ActualizarImagenBebestibleComponent } from './components/actualizar-imagen-bebestible/actualizar-imagen-bebestible.component';
import { FinanzasPageComponent } from './pages/finanzas-page/finanzas-page.component';
import { IngresosComponent } from './components/finanzas/ingresos/ingresos.component';
import { EgresosComponent } from './components/finanzas/egresos/egresos.component';
import { FinanzasInicioComponent } from './components/finanzas/finanzas-inicio/finanzas-inicio.component';
import { ComandaComponent } from '../app-cocinero/pages/comanda/comanda.component';

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
    DashboardPageComponent,
    RolesUsuariosComponent,
    IngredientesPageComponent,
    RegistroIngredienteComponent,
    ListaIngredientesComponent,
    RecetasPageComponent,
    RegistroRecetasComponent,
    ListaRecetaComponent,
    ModalMesaComponent,
    PlatosPageComponent,
    ListaPlatosComponent,
    RegistroPlatoComponent,
    ProveedoresPageComponent,
    ListaProveedoresComponent,
    RegistroProveedorComponent,
    ActualizarImagenComponent,
    DetalleModalMesaComponent,
    PedidosIngredientesComponent,
    RegistrarPedidosIngredientesComponent,
    ListaPedidosIngredientesComponent,
    ListaBebestiblesComponent,
    RegistroBebestiblesComponent,
    BebestiblesPageComponent,
    ReciboPedidosPageComponent,
    ListaComponent,
    RegistroComponent,
    ActualizarImagenBebestibleComponent,
    FinanzasPageComponent,
    IngresosComponent,
    EgresosComponent,
    FinanzasInicioComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
