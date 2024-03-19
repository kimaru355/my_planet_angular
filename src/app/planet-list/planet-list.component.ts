import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { meplanet } from '../myplanets';
import { MatListModule, MatListItem } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [MatListModule, CommonModule, MatListItem],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent implements OnInit {
  constructor(private dataService: GetDataService, private router: Router) {}

  planets: Array<meplanet> = this.dataService.getPlanets();

  displayPlanet(planet: meplanet) {
    console.log(planet);
    this.router.navigate(['/planet', planet]);
  }

  ngOnInit(): void {}
}

console.log(new GetDataService().getPlanets());
