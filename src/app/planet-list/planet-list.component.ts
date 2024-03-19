import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { meplanet } from '../myplanets';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent {
  planets = new GetDataService().getPlanets();
}
