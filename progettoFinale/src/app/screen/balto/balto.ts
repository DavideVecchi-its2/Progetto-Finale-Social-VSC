import { ChangeDetectorRef, Component, signal } from '@angular/core';
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

  messaggi = signal<ChatMessage[]>([
  {
    role: 'assistant',
    content: 'Ciao! Io sono Balto, sono qui per aiutarti con qualsiasi domanda su PetsBook. Come posso aiutarti?'
  }
]);

inputUtente = signal('');
loading = signal(false);  
  constructor(private router: Router, private botService: ChatbotService, private cdr: ChangeDetectorRef){}

goToHome(){
  this.router.navigate(['/home']);
}

gifUrl = 'assets/img/PetsBook.gif';
staticUrl = 'assets/img/fermo.png'; // immagine finale o statica
gifVisible = signal(false);
timeoutId: any;
value: any;

startGif() {
  this.gifVisible.set(true);

  clearTimeout(this.timeoutId);

  this.timeoutId = setTimeout(() => {
    this.gifVisible.set(false);
  }, 2500);
}
inviaDomanda() {
  const text = this.inputUtente().trim();
  if (!text) return;

  this.inputUtente.set('');

  // aggiorna subito la chat (forza render)
  this.messaggi.update(msgs => [
    ...msgs,
    { role: 'user', content: text }
  ]);

  this.loading.set(true);

  this.botService.sendMessage(text, this.messaggi()).subscribe({
    next: res => {
      this.messaggi.set(res.history);
      this.loading.set(false);
    },
    error: err => {
      console.error(err);
      this.loading.set(false);
    }
  });
}


ricomincia() {
  this.messaggi.update(msgs => msgs.slice(0, 1));
}


goToLogin(){
  this.router.navigate(['/login']);
}
goToRegistration(){
  this.router.navigate(['/register']);
}
}
