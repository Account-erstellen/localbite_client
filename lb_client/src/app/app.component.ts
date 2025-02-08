import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menubar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'lb_client';
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        route: '/dashboard',
      },
      {
        label: 'Produkte',
        icon: 'pi pi-search',
        route: '/products',

      },
      {
        label: 'Favoriten',
        icon: 'pi pi-star',
        route:'/favorites',
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        route:'/profile',
      }
    ]
  }
}
