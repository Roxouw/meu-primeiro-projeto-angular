import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
    
    <h1>Curso de Angular</h1>
    Antigo: <app-new-component></app-new-component>
    Novo: <app-new-component />
    {{ title }}
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
