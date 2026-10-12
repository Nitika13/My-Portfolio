import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Nitika | Software Engineer',
    loadComponent: () => import('./pages/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About | Nitika',
    loadComponent: () => import('./pages/about').then((m) => m.About),
  },
  {
    path: 'experience',
    title: 'Experience | Nitika',
    loadComponent: () => import('./pages/experience').then((m) => m.Experience),
  },
  {
    path: 'projects',
    title: 'Projects | Nitika',
    loadComponent: () => import('./pages/projects').then((m) => m.Projects),
  },
  {
    path: 'skills',
    title: 'Skills | Nitika',
    loadComponent: () => import('./pages/skills').then((m) => m.Skills),
  },
  {
    path: 'contact',
    title: 'Contact | Nitika',
    loadComponent: () => import('./pages/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
