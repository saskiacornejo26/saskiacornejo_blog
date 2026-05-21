import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

@Component({
  selector: 'app-blog',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  protected readonly blogPosts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Introducción a Angular 20: Nuevas Características',
      excerpt: 'Explora las nuevas características y mejoras de Angular 20, incluyendo mejor rendimiento y nuevas APIs.',
      content: 'Contenido completo del artículo...',
      author: 'Saskia Cornejo',
      date: '2024-01-15',
      readTime: '5 min',
      tags: ['Angular', 'Frontend', 'JavaScript'],
      featured: true
    },
    {
      id: 2,
      title: 'Mejores Prácticas para APIs REST con Node.js',
      excerpt: 'Aprende las mejores prácticas para diseñar y desarrollar APIs REST robustas y escalables.',
      content: 'Contenido completo del artículo...',
      author: 'Saskia Cornejo',
      date: '2024-01-10',
      readTime: '8 min',
      tags: ['Node.js', 'Backend', 'API'],
      featured: true
    },
    {
      id: 3,
      title: 'Docker para Desarrolladores: Guía Completa',
      excerpt: 'Todo lo que necesitas saber sobre Docker para mejorar tu flujo de desarrollo.',
      content: 'Contenido completo del artículo...',
      author: 'Saskia Cornejo',
      date: '2024-01-05',
      readTime: '12 min',
      tags: ['Docker', 'DevOps', 'Containers'],
      featured: false
    }
  ]);

  protected readonly featuredPosts = signal<BlogPost[]>([]);

  constructor() {
    this.featuredPosts.set(this.blogPosts().filter(p => p.featured));
  }
}
