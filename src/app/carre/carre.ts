import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carre',
  styleUrl: './carre.scss',
  templateUrl: './carre.html',
})
export class Carre {
  public couleurChoisie = output<string>();

  public onClick(couleur: string): void {
    this.couleurChoisie.emit(couleur);
  }
}