import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCocineroRoutingModule } from './app-cocinero-routing.module';
import { ComandaComponent } from './pages/comanda/comanda.component';

@NgModule({
  declarations: [ComandaComponent],
  exports: [ComandaComponent],
  imports: [CommonModule, AppCocineroRoutingModule],
})
export class AppCocineroModule {}
