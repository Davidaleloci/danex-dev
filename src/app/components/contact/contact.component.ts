import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  errorMessage: string = '';

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    // Simulación de envío de formulario por API
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.submitSuccess = false;
      }, 6000);
    }, 1000);
  }
}
