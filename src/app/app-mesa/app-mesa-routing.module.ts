import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMesaPageComponent } from './pages/app-mesa-page/app-mesa-page.component';
import { CartaMesaComponent } from './components/carta-mesa/carta-mesa.component';
import { PedidoMesaComponent } from './components/pedido-mesa/pedido-mesa.component';

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
            path: 'pedido/:id_mesa',
            component: PedidoMesaComponent,
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
export class AppMesaRoutingModule {}
