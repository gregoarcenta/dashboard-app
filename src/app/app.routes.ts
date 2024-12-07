import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'panel',
    loadComponent: () =>
      import('@/features/panel/layouts/panel-layout/panel-layout.component'),
    loadChildren: () =>
      import('@/features/panel/panel.routes').then((r) => r.routes),
  },
  {
    path: '**',
    redirectTo: () => 'panel',
  },
];
