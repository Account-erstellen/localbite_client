import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
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

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home'
      },
      {
        label: 'Produkte',
        icon: 'pi pi-search',
      },
      {
        label: 'Favoriten',
        icon: 'pi pi-star'
      },
      {
        label: 'Profil',
        icon: 'pi pi-user'
      }
    ]
  }
}
