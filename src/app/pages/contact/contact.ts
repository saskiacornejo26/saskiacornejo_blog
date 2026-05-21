import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  protected readonly contactForm: FormGroup;
  protected readonly isSubmitting = signal(false);

  protected readonly contactInfo = signal([
    {
      icon: 'email',
      title: 'Email',
      value: 'saskia.cornejo@gmail.com',
      link: 'mailto:saskia.cornejo@gmail.com'
    },
    {
      icon: 'phone',
      title: 'Teléfono',
      value: '+51 962756961',
      link: 'tel:+51962756961'
    },
    {
      icon: 'location_on',
      title: 'Ubicación',
      value: 'Lima - Perú',
      link: null
    },
    {
      icon: 'work',
      title: 'LinkedIn',
      value: 'linkedin.com/in/saskia-cornejo',
      link: 'http://www.linkedin.com/in/saskia-cornejo'
    }
  ]);
  protected readonly socialLinks = signal([
    { name: 'GitHub', icon: 'code', url: 'https://github.com/SaskiaCF', color: '#333' },
    { name: 'LinkedIn', icon: 'work', url: 'http://www.linkedin.com/in/saskia-cornejo', color: '#0077b5' },
    { name: 'Email', icon: 'email', url: 'mailto:saskia.cornejo@gmail.com', color: '#ea4335' }
    /* { name: 'Twitter', icon: 'chat', url: 'https://twitter.com/saskiacornejo', color: '#1da1f2' } */
  ]);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [false]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      // Simular envío
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.contactForm.reset();
        alert('¡Mensaje enviado correctamente!');
      }, 2000);
    }
  }
}
