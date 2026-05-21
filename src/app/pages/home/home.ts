import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly skills = signal([
    'Angular', 'React', 'TypeScript', 'JavaScript', 'CSS',
    'Node.js', 'SQL Server', 'PostgreSQL', 'Java', 'C#','.Net', 'Python', 'GitHub',
    'Azure', 'Firebase', 'Vercel', 'REST APIs'
  ]);

  protected readonly socialLinks = signal([
    { name: 'GitHub', icon: 'code', url: 'https://github.com/SaskiaCF', color: '#333' },
    { name: 'LinkedIn', icon: 'work', url: 'http://www.linkedin.com/in/saskia-cornejo', color: '#0077b5' },
    { name: 'Email', icon: 'email', url: 'mailto:saskia.cornejo@gmail.com', color: '#ea4335' }
    /* { name: 'Twitter', icon: 'chat', url: 'https://twitter.com/saskiacornejo', color: '#1da1f2' } */
  ]);
}
