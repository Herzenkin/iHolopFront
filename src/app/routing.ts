import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
