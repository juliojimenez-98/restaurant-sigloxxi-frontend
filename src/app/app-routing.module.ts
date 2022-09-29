import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './auth/pages/change-password/change-password.component';
import { ValidarTokenGuard } from './guard/validar-token.guard';

const routes: Routes = [
  {
    path: 'changepass',
    component: ChangePasswordComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [ValidarTokenGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: '/home/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
