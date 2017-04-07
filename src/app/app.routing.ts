import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegisDetailComponent } from './legis-detail/legis-detail.component';
import { AboutComponent } from './about/about.component';
import { CensorComponent } from './censor/censor.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'legis-detail/:key',
  component: LegisDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'censor',
    component: CensorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
