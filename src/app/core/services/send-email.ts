import { inject, Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class SendEmail {
  private readonly messageService = inject(MessageService);
  async send(template: { name: string; email: string; message: string }) {
    try {
      await emailjs.send(
        'service_1htrtor',
        'template_eosuj9b',
        template,
        '8cZhcZWeAW2xo1Wpy'
      );
      this.showSuccessMessage();
    } catch {
      this.showErrorMessage();
    }
  }

  showSuccessMessage() {
    this.messageService.clear();
    this.messageService.add({
      severity: 'success',
      summary: 'Correo enviado',
      detail: 'Tu mensaje fue enviado correctamente. Te responderé pronto.',
      life: 5000,
    });
  }

  showErrorMessage() {
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail:
        'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.',
      life: 5000,
    });
  }
}
