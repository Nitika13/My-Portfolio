import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, PROJECTS, STATS } from '../data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero container">
      <div class="hero-copy">
        <p class="eyebrow">Hello, I'm</p>
        <h1 class="display">{{ p.name }}<span class="dot">.</span></h1>
        <p class="role-line">
          <span class="role-static">{{ p.title }} · </span>
          <span class="role-rotating" aria-live="polite">{{ role() }}</span>
        </p>
        <p class="lead">{{ p.tagline }}</p>

        <div class="btn-row">
          <a routerLink="/projects" class="btn btn-primary">View my work</a>
          <a routerLink="/contact" class="btn btn-ghost">Get in touch</a>
        </div>

        <div class="social-row">
          <a [href]="p.github" target="_blank" rel="noopener">GitHub</a>
          <a [href]="p.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a [href]="p.leetcode" target="_blank" rel="noopener">LeetCode</a>
        </div>
      </div>

      <div class="hero-photo">
        <div class="photo-frame">
          <img [src]="p.photo" alt="Portrait of Nitika" width="420" height="520" />
        </div>
        <div class="float-card card-a">
          <strong>Full-stack</strong>
          <span>Spring Boot · ASP.NET · React</span>
        </div>
        <div class="float-card card-b">
          <strong>Applied AI</strong>
          <span>ML · LLMs · Speech</span>
        </div>
      </div>
    </section>

    <section class="container stats">
      @for (s of stats; track s.label) {
        <div class="stat">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      }
    </section>

    <section class="container section">
      <div class="section-head">
        <h2>Featured work</h2>
        <a routerLink="/projects" class="text-link">All projects →</a>
      </div>
      <div class="grid-3">
        @for (pr of projects; track pr.name) {
          <a routerLink="/projects" class="mini-card" [attr.data-accent]="pr.accent">
            <span class="chip">{{ pr.kind }}</span>
            <h3>{{ pr.name }}</h3>
            <p>{{ pr.blurb }}</p>
          </a>
        }
      </div>
    </section>

    <section class="container section explore">
      <h2>Explore the portfolio</h2>
      <div class="grid-3">
        <a routerLink="/about" class="nav-tile"><span>01</span><h3>About</h3><p>Background and education</p></a>
        <a routerLink="/experience" class="nav-tile"><span>02</span><h3>Experience</h3><p>Internship at MAQ Software</p></a>
        <a routerLink="/skills" class="nav-tile"><span>03</span><h3>Skills</h3><p>Stack, certifications and more</p></a>
      </div>
    </section>
  `,
})
export class Home implements OnInit, OnDestroy {
  protected readonly p = PROFILE;
  protected readonly stats = STATS;
  protected readonly projects = PROJECTS;
  protected readonly role = signal(PROFILE.roles[0]);

  private i = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.i = (this.i + 1) % this.p.roles.length;
      this.role.set(this.p.roles[this.i]);
    }, 2400);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
