import { Component } from '@angular/core';
import { Login } from '../login';
import { loginData } from '../../assets/data/loginData';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  user: Login = loginData;
}
