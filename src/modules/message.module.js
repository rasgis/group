import { Module } from '../core/module';

export class MessageModule extends Module {
  constructor(type, text) {
    super('div', 'Создать цитату');
  }

  async fetchRandomMessage() {

    const proxyUrl = 'https://corsproxy.io/?';
    const targetUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru';
  
    const response = await fetch(proxyUrl + targetUrl);
    if (!response.ok) {
      throw new Error('Ошибка при получении сообщения');
    }
    const data = await response.json();
    return `${data.quoteText} — ${data.quoteAuthor || 'Неизвестный автор'}`;
  }

  async showMessage(duration = 3000) {
    try {
      const message = await this.fetchRandomMessage();

      const positions = [
        { bottom: '20px', right: '20px' },
        { top: '20px', right: '20px' },
        { top: '20px', left: '20px' },
        { bottom: '20px', left: '20px' }
      ];

      const position = positions[Math.floor(Math.random() * positions.length)];

      const messageBlock = document.createElement('div');
      messageBlock.innerText = message;
      messageBlock.style.position = 'fixed';
      messageBlock.style.width = '400px'
      messageBlock.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      messageBlock.style.color = 'white';
      messageBlock.style.padding = '10px';
      messageBlock.style.borderRadius = '5px';
      messageBlock.style.zIndex = '1000';

      Object.assign(messageBlock.style, position);

      document.body.appendChild(messageBlock);

      await this.delay(duration);

      messageBlock.remove();
    } catch (error) {
      console.error('Ошибка:', error);

      this.showErrorMessage('Не удалось получить сообщение. Попробуйте снова.');
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showErrorMessage(message) {
    const errorBlock = document.createElement('div');
    errorBlock.innerText = message;
    errorBlock.style.position = 'fixed';
    errorBlock.style.bottom = '20px';
    errorBlock.style.right = '20px';
    errorBlock.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    errorBlock.style.color = 'white';
    errorBlock.style.padding = '10px';
    errorBlock.style.borderRadius = '5px';
    errorBlock.style.zIndex = '1000';

    document.body.appendChild(errorBlock);
    
    setTimeout(() => {
      errorBlock.remove();
    }, 3000);
  }

  trigger() {
    this.showMessage(3000); 
  }
}