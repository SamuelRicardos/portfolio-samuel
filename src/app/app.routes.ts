import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "sobremim",
    pathMatch: "full" // Garante que a rota vazia seja considerada
},
  {
    path: 'sobremim',
    component: HomeComponent
  }
];
