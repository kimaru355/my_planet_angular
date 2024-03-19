import { Injectable } from '@angular/core';
import { meplanet } from './myplanets';
import { planets } from '../assets/data/planets';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  getPlanets() {
    return planets;
  }
}
