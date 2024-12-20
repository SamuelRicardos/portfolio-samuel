import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full" // Garante que a rota vazia seja considerada
},
  {
    path: 'home',
    component: HomeComponent
  }
];
