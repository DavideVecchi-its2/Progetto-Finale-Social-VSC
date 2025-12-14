import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage, ChatResponse, ChatRequest } from '../model/chat-model';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
        private apiUrl = 'http://localhost:8080/chat';

        
  constructor(private http: HttpClient) {}
  
   sendMessage(message: string, history: ChatMessage[]): Observable<ChatResponse> {
    const body: ChatRequest = {message, history};
    return this.http.post<ChatResponse>(this.apiUrl, body);
  }
}
