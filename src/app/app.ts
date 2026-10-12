import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PROFILE } from './data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
})
export class App {
  protected readonly p = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/experience', label: 'Experience', exact: false },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/skills', label: 'Skills', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  protected toggle() {
    this.menuOpen.update((v) => !v);
  }

  protected close() {
    this.menuOpen.set(false);
  }
}
