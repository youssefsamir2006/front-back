import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsListComponent },
  // We can add a wildcard route for 404 pages later if needed
  // { path: '**', component: PageNotFoundComponent },
];
