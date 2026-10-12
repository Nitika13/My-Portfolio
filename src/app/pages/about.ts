import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EDUCATION, PROFILE } from '../data';
@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <section class="container page-head">
      <p class="eyebrow">About me</p>
      <h1>Engineer, builder, lifelong learner.</h1>
    </section>

    <section class="container about-grid">
      <div class="about-photo">
        <div class="photo-frame small">
          <img [src]="p.photo" alt="Portrait of Nitika" width="420" height="520" loading="lazy" />
        </div>
      </div>
      <div class="about-text">
        @for (para of p.about; track para) {
          <p class="lead">{{ para }}</p>
        }
        <div class="btn-row">
          <a [href]="p.github" target="_blank" rel="noopener" class="btn btn-ghost">GitHub</a>
          <a [href]="p.linkedin" target="_blank" rel="noopener" class="btn btn-ghost">LinkedIn</a>
          <a routerLink="/contact" class="btn btn-primary">Contact me</a>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2>Education</h2>
      <div class="panel edu">
        <div>
          <h3>{{ edu.school }}</h3>
          <p class="muted">{{ edu.degree }}</p>
          <p class="muted">{{ edu.place }}</p>
        </div>
        <div class="edu-meta">
          <span class="chip">{{ edu.period }}</span>
          <span class="chip chip-accent">{{ edu.score }}</span>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly p = PROFILE;
  protected readonly edu = EDUCATION;
}
