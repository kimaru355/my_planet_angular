import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  standalone: true,
  imports: [],
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css',
})
export class PlanetDetailsComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      console.log(params['data']);
    });
  }
}
