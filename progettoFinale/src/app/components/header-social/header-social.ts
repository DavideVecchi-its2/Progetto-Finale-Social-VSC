import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-header-social',
  imports: [ButtonModule],
  templateUrl: './header-social.html',
  styleUrl: './header-social.css',
})
export class HeaderSocial {

gifUrl = 'assets/img/PetsBook.gif';
staticUrl = 'assets/img/fermo.png'; // immagine finale o statica
gifVisible = false;
timeoutId: any;
startGif() {
  this.gifVisible = true;

  // reset per non far partire più timer in parallelo
  clearTimeout(this.timeoutId);

  // dopo 5 secondi "fermi" la GIF
  this.timeoutId = setTimeout(() => {
    this.gifVisible = false;
  }, 2500);
}

}
