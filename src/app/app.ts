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
    '(click)': 'black()'
  },
})
export class App {
  protected readonly title = signal('ManilBenmoussaTP1');
  couleur = signal('white'); // Déclaration du signal pour la couleur de fond

  // reinitialiser(): void {
  //   this.couleur.set('white');
  // }
  black(): void {
    this.couleur.set('black');
  }
}