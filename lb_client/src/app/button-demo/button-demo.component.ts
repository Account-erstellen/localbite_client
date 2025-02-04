import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  standalone: true,
  styleUrl: './button-demo.component.css',
  imports: [ButtonModule]
})
export class ButtonDemoComponent {}
