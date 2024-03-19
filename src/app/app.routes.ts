import { Routes } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

export const routes: Routes = [
  { path: 'planets', component: PlanetListComponent },
  { path: 'planet:data', component: PlanetDetailsComponent },
];
