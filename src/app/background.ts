import { Service, signal } from '@angular/core';

@Service()
export class Background {
  couleur = signal('white');

  changerCouleur(nouvelleCouleur: string): void {
    this.couleur.set(nouvelleCouleur);
  }
}