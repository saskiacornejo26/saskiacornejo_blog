import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  protected readonly experiences = signal<Experience[]>([
    {
      company: 'IDM Technology',
      position: 'Analista Programador',
      period: '2025 - Actualidad',
      description: 'Colaboré en el desarrollo y mejora continua del sistema, aplicando Scrum para gestionar entregas iterativas y efectivas. Trabajé de la mano con el usuario final para implementar actualizaciones alineadas con sus necesidades y mejorar la experiencia general.',
      technologies: ['C#','.Net', 'Visual Basic', 'SQL Server', 'Github', 'Github Copilot']
    },
    {
      company: 'Teamsoft SAC',
      position: 'Analista Programador',
      period: '2020 - 2025',
      description: 'Responsable de brindar soporte técnico y corregir errores en aplicaciones web y de escritorio, colaborando directamente con los usuarios para comprender sus necesidades y mejorar la experiencia del sistema. Implementé prácticas ágiles con Scrum, optimizando la comunicación del equipo y acelerando los tiempos de entrega.',
      technologies: ['C#', 'Visual Basic', 'SQL Server', 'Github', 'Java', 'Github Copilot']
    },
    {
      company: 'Mundotek',
      position: 'Web Developer',
      period: '2019 - 2020',
      description: 'Formé parte del equipo encargado del desarrollo del sistema ERP de la empresa, donde trabajé junto a diversas áreas para crear y mejorar requerimientos funcionales clave. Colaboré directamente con los usuarios finales, enfocándome en diseñar soluciones que optimizaran sus procesos y ofrecieran experiencias digitales excepcionales.',
      technologies: ['C#', '.Net', 'SQL Server', 'JavaScript', 'HTML5', 'Bootstrap']
    },
    {
      company: '7DSystems',
      position: 'Web Developer',
      period: '2018 - 2019',
      description: 'Formé parte del equipo que desarrolló una plataforma para gestionar las vacaciones de los empleados, donde apliqué mejores prácticas de desarrollo y fortalecí mis habilidades de trabajo colaborativo. También participé en la recopilación de requerimientos funcionales junto a los usuarios, comprendiendo de cerca sus necesidades y la importancia de diseñar soluciones centradas en ellos.',
      technologies: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'jQuery','C#','.Net','SQL Server']
    }
  ]);

  protected readonly education = signal<Education[]>([
    {
      institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      degree: 'Bachiller en Ingeniería de Sistemas',
      period: '2021 - 2025',
      description: 'Formación sólida en desarrollo de software, gestión de proyectos tecnológicos y metodologías ágiles. Enfocada en diseñar soluciones innovadoras que integren tecnología y eficiencia en los procesos empresariales. Proyecto final: Sistema de citas con predicción de ausencias usando regresión logística para mejorar la gestión en Centros Odontológicos'
    },
    {
      institution: 'SENATI',
      degree: 'Técnica en Desarrollo de Software',
      period: '2017 - 2019',
      description: 'Técnica en desarrollo de software, incluyendo frameworks frontend, backend y bases de datos.'
    }
  ]);

  protected readonly certifications = signal([
    /*'AWS Certified Developer',
    'Angular Certified Developer',
    'MongoDB Certified Developer',
    'Docker Certified Associate',
    'Scrum Master Certification' */
    'JAVA SE, Spring Boot 3 y WebFlux',
    'Angular: Creación de Aplicaciones Web'
  ]);
  frontEnd= signal<string[]>(['Angular','React','TypeScript','HTML5', 'CSS'])
  backEnd= signal<string[]>(['Java','Python','.Net','C#', 'REST APIs'])
  devOps= signal<string[]>(['Azure','AWS','Firebase','GitHub', 'CI/CD','Git','Vercel'])
  
}
