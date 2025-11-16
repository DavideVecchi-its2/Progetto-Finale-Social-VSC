import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-balto',
  imports: [ButtonModule, InputTextModule],
  templateUrl: './balto.html',
  styleUrl: './balto.css',
})
export class Balto {

gifUrl = 'assets/img/PetsBook.gif';
staticUrl = 'assets/img/fermo.png'; // immagine finale o statica
gifVisible = false;
timeoutId: any;
value: any;

startGif() {
  this.gifVisible = true;

  // reset per non far partire più timer in parallelo
  clearTimeout(this.timeoutId);

  // dopo 5 secondi "fermi" la GIF
  this.timeoutId = setTimeout(() => {
    this.gifVisible = false;
  }, 2500);
}
inviaDomanda() {
//invia la domanda al chatbot
}


ricomincia() {
  //ripulisce la chat
}

constructor(private router: Router){}

goToLogin(){
  this.router.navigate(['/login']);
}
goToRegistration(){
  this.router.navigate(['/register']);
}
}
