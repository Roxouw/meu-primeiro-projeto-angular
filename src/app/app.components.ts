import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  styles: [
    `
      h1 {
        color: red;
        font-size: 2rem;
      }
      .dark-theme {
        background-color: black;
        color: white;
        padding: 20px;
        border-radius: 5px;
      }
    `
  ],
  template: 
  `
    <h1>Curso de Angular</h1>
    <div class="dark-theme">
      <h2>Meu primeiro projeto</h2>
      <p>Este é o meu primeiro projeto com Angular!</p>
    </div>
    <app-new-component />
    {{ title }}
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
