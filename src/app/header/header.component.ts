import { Component } from '@angular/core';
import { Login } from '../login';
import { loginData } from '../../assets/data/loginData';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: Login = loginData;
}
