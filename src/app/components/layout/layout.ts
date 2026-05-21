import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  linkedinUrl = 'http://www.linkedin.com/in/saskia-cornejo';
  githubUrl = 'https://github.com/SaskiaCF';
  email = 'mailto:saskia.cornejo@gmail.com';

  protected readonly isHandset = signal(false);
  protected readonly isSidenavOpen = signal(false);

  protected readonly menuItems = [
    { label: 'Inicio', icon: 'home', route: '/home' },
    { label: 'Sobre Mí', icon: 'person', route: '/about' },
    { label: 'Proyectos', icon: 'work', route: '/projects' },
    /* { label: 'Blog', icon: 'article', route: '/blog' }, */
    { label: 'Contacto', icon: 'contact_mail', route: '/contact' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe(result => {
        this.isHandset.set(result.matches);
        if (!result.matches) {
          this.isSidenavOpen.set(false);
        }
      });
  }

  toggleSidenav() {
    this.isSidenavOpen.set(!this.isSidenavOpen());
  }
}
