import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChatMessage } from '../../model/chat-model';
import { ChatbotService } from '../../service/chatbot-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-balto',
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './balto.html',
  styleUrl: './balto.css',
})
export class Balto {

  messaggi: ChatMessage[] = [
    {
      role: 'assistant',
      content: 'Ciao! Io sono Balto, sono qui per aiutarti con qualsiasi domanda su PetsBook. Come posso aiutarti?'
    }
  ];
  inputUtente = '';
  loading = false;
  loadingTimeout: any;
  
  constructor(private router: Router, private botService: ChatbotService, private cdr: ChangeDetectorRef){}

goToHome(){
  this.router.navigate(['/home']);
}

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
 if (!this.inputUtente.trim()) return;

    const text = this.inputUtente;
    this.inputUtente = '';

      this.messaggi = [
    ...this.messaggi,
    { role: 'user', content: text }
  ];

    this.loading = true;

    this.loadingTimeout = setTimeout(() => {
    this.loading = false;
    }, 5000);

    this.botService.sendMessage(text, [...this.messaggi]).subscribe({
      next: res => {
        this.messaggi = res.history;
        this.loading = false;
        this.cdr.detectChanges();   
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }


  ricomincia() {
    this.messaggi = this.messaggi.slice(0, 1); // lascia solo il messaggio iniziale
  }


goToLogin(){
  this.router.navigate(['/login']);
}
goToRegistration(){
  this.router.navigate(['/register']);
}
}
