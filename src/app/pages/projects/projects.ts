import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule, MatTabChangeEvent  } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string | string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    RouterLink
],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  protected readonly selectedTab = signal(0);
  protected readonly window = window;
  protected readonly carouselIndices = signal<Record<number, number>>({});
  protected readonly selectedProject = signal<Project | null>(null);
  protected readonly detailImageIndex = signal(0);

  protected readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con Angular y .Net',
      longDescription: 'Desarrollé una plataforma de e-commerce completa con funcionalidades avanzadas como carrito de compras, procesamiento de pagos, gestión de inventario y panel de administración. Incluye autenticación JWT, integración con APIs de pago y sistema de actualización de inventarios en tiempo real.',
      technologies: ['Angular', '.Net', 'PostgreSQL',  'OAuth', 'Azure', 'Culqi'],
      githubUrl: 'https://github.com/saskiacornejo/ecommerce-platform',
      liveUrl: 'https://lemon-mushroom-0f0b2a00f.7.azurestaticapps.net/',
      imageUrl: [
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce1.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce2.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce3.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce4.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce5.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce6.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/ecommerce/ecomerce7.JPG',
      ],
      category: 'fullstack',
      featured: true
    }
    ,
    {
      id: 2,
      title: 'Blog Personal',
      description: 'Blog personal con Angular y Firebase',
      longDescription: 'Una pagina web personal donde me presento. Desarrollada con Angular y Firebase.',
      technologies: ['Angular', 'Firebase','Angular Material'],
      githubUrl: 'https://github.com/saskiacornejo/task-manager',
      liveUrl: 'https://saskiacornejo-blog.vercel.app/home',
      imageUrl: [
        'https://saskiacornejo-blog.vercel.app/assets/blog/Blogpersonal1.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/blog/Blogpersonal2.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/blog/Blogpersonal3.JPG',
        'https://saskiacornejo-blog.vercel.app/assets/blog/Blogpersonal4.JPG'
      ],
      category: 'frontend',
      featured: true
    }/*,
    {
      id: 3,
      title: 'REST API - Blog System',
      description: 'API RESTful para sistema de blog con autenticación y autorización',
      longDescription: 'API RESTful robusta para un sistema de blog con autenticación JWT, autorización basada en roles, subida de archivos, búsqueda avanzada y sistema de comentarios. Incluye documentación completa con Swagger.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger', 'Docker'],
      githubUrl: 'https://github.com/saskiacornejo/blog-api',
      category: 'backend',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con visualizaciones interactivas',
      longDescription: 'Dashboard interactivo para visualizar datos meteorológicos con gráficos dinámicos, mapas de calor y predicciones. Integra múltiples APIs meteorológicas y presenta los datos de forma visualmente atractiva.',
      technologies: ['Angular', 'Chart.js', 'D3.js', 'OpenWeather API', 'TypeScript'],
      githubUrl: 'https://github.com/saskiacornejo/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.com',
      category: 'frontend',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App - React Native',
      description: 'Aplicación móvil para gestión de gastos personales',
      longDescription: 'Aplicación móvil desarrollada en React Native para gestión de gastos personales con categorización automática, reportes visuales, sincronización en la nube y notificaciones inteligentes.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Chart.js', 'Push Notifications'],
      githubUrl: 'https://github.com/saskiacornejo/expense-tracker-mobile',
      category: 'mobile',
      featured: false
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Arquitectura de microservicios con Docker y Kubernetes',
      longDescription: 'Implementación de una arquitectura de microservicios escalable con Docker, Kubernetes, API Gateway, service discovery y monitoreo. Incluye servicios de autenticación, usuarios, productos y notificaciones.',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'MongoDB', 'Nginx'],
      githubUrl: 'https://github.com/saskiacornejo/microservices-demo',
      category: 'backend',
      featured: true
    }*/
  ]);

  protected readonly categories = signal([
    { key: 'todos', label: 'Todos', icon: 'apps' },
    { key: 'frontend', label: 'Frontend', icon: 'web' },
    { key: 'backend', label: 'Backend', icon: 'storage' },
    { key: 'fullstack', label: 'FullStack', icon: 'developer_board' },
    /*{ key: 'mobile', label: 'Mobile', icon: 'phone_android' }*/
  ]);

  protected readonly filteredProjects = signal<Project[]>([]);

  constructor() {
    this.filteredProjects.set(this.projects());
  }


  filterProjects(event: MatTabChangeEvent) {
    const selectedCategory = this.categories()[event.index];
    selectedCategory.label=selectedCategory.label.toLowerCase();
    if (selectedCategory.label === 'todos') {
      this.filteredProjects.set(this.projects());
    } else {
      this.filteredProjects.set(
        this.projects().filter(project => project.category === selectedCategory.label)
      );
    }
  }

  getFeaturedProjects() {
    return this.projects().filter(project => project.featured);
  }

  getImages(project: Project): string[] {
    if (!project.imageUrl) {
      return [];
    }
    return Array.isArray(project.imageUrl) ? project.imageUrl : [project.imageUrl];
  }

  getCarouselIndex(projectId: number): number {
    return this.carouselIndices()[projectId] ?? 0;
  }

  private setCarouselIndex(projectId: number, index: number, total: number): void {
    const normalized = ((index % total) + total) % total;
    this.carouselIndices.update((current) => ({ ...current, [projectId]: normalized }));
  }

  prevCarousel(project: Project, event: Event): void {
    event.stopPropagation();
    const images = this.getImages(project);
    if (images.length <= 1) {
      return;
    }
    const current = this.getCarouselIndex(project.id);
    this.setCarouselIndex(project.id, current - 1, images.length);
  }

  nextCarousel(project: Project, event: Event): void {
    event.stopPropagation();
    const images = this.getImages(project);
    if (images.length <= 1) {
      return;
    }
    const current = this.getCarouselIndex(project.id);
    this.setCarouselIndex(project.id, current + 1, images.length);
  }

  goToCarouselSlide(project: Project, index: number, event: Event): void {
    event.stopPropagation();
    const images = this.getImages(project);
    if (images.length <= 1) {
      return;
    }
    this.setCarouselIndex(project.id, index, images.length);
  }

  openDetail(project: Project): void {
    this.selectedProject.set(project);
    this.detailImageIndex.set(this.getCarouselIndex(project.id));
  }

  closeDetail(): void {
    this.selectedProject.set(null);
  }

  getDetailImageIndex(): number {
    return this.detailImageIndex();
  }

  setDetailImage(index: number): void {
    const project = this.selectedProject();
    if (!project) {
      return;
    }
    const images = this.getImages(project);
    if (images.length === 0) {
      return;
    }
    const normalized = ((index % images.length) + images.length) % images.length;
    this.detailImageIndex.set(normalized);
  }

  prevDetailImage(): void {
    this.setDetailImage(this.detailImageIndex() - 1);
  }

  nextDetailImage(): void {
    this.setDetailImage(this.detailImageIndex() + 1);
  }
}
