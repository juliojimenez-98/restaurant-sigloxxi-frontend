import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMesaRoutingModule } from './app-mesa-routing.module';
import { AppMesaPageComponent } from './pages/app-mesa-page/app-mesa-page.component';
import { CartaMesaComponent } from './components/carta-mesa/carta-mesa.component';
import { PedidoMesaComponent } from './components/pedido-mesa/pedido-mesa.component';
import { PagarPedidoComponent } from './components/pagar-pedido/pagar-pedido.component';

@NgModule({
  declarations: [AppMesaPageComponent, CartaMesaComponent, PedidoMesaComponent, PagarPedidoComponent],
  imports: [CommonModule, AppMesaRoutingModule],
})
export class AppMesaModule {}
