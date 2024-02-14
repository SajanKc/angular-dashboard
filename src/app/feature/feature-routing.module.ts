import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    loadChildren: () =>
      import('./client-config/client-config.module').then(
        (m) => m.ClientConfigModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-config/admin-config.module').then(
        (m) => m.AdminConfigModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
