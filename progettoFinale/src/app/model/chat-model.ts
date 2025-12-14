export class ChatMessage {
  role!: 'user' | 'assistant';
  content!: string;
}

export class ChatRequest {
  message!: string;
  history!: ChatMessage[];
}

export class ChatResponse {
  reply!: string;
  history!: ChatMessage[];
}