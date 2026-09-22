import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Carre } from './carre/carre';

@Component({
  imports: [RouterOutlet, Header, Footer, Carre],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '[style.background-color]': 'couleur()',
  },
})
export class App {
  protected readonly title = signal('ManilBenmoussaTP1');
  couleur = signal('white');
}