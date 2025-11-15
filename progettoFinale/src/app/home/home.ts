import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from "primeng/button";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [Button, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

gifUrl = 'assets/img/PetsBook.gif';
staticUrl = 'assets/img/fermo.png'; // immagine finale o statica
gifVisible = false;
timeoutId: any;

constructor(private router: Router){}

goToLogin(){
  this.router.navigate(['/login']);
}
goToRegistration(){
  this.router.navigate(['/register']);
}
goToChatBot(){
  this.router.navigate(['/balto']);
}

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
