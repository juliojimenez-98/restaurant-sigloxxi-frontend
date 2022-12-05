import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMesaPageComponent } from './pages/app-mesa-page/app-mesa-page.component';
import { CartaMesaComponent } from './components/carta-mesa/carta-mesa.component';
import { PagarPedidoComponent } from './components/pagar-pedido/pagar-pedido.component';
import { MesasClientesComponent } from './components/mesas-clientes/mesas-clientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppMesaPageComponent,
        children: [
          { path: 'carta/:id_mesa', component: CartaMesaComponent },
          {
            path: 'pedido/:id_mesa/:id_pedido',
            component: PagarPedidoComponent,
          },
          { path: 'mesas-clientes', component: MesasClientesComponent },
          { path: 'pago/:id', component: PagarPedidoComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMesaRoutingModule {}
