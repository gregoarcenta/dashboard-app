import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'summary',
    loadComponent: () =>
      import('@/features/panel/pages/summary/summary.component'),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('@/features/panel/pages/projects/projects.component'),
  },
  {
    path: '**',
    redirectTo: () => 'summary',
  },
];
