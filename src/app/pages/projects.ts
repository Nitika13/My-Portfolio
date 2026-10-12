import { Component } from '@angular/core';
import { PROFILE, PROJECTS } from '../data';

@Component({
  selector: 'app-projects',
  template: `
    <section class="container page-head">
      <p class="eyebrow">Projects</p>
      <h1>Things I've built.</h1>
    </section>

    <section class="container project-list">
      @for (pr of projects; track pr.name; let i = $index) {
        <article class="project panel" [attr.data-accent]="pr.accent">
          <div class="project-index">0{{ i + 1 }}</div>
          <div class="project-body">
            <span class="chip">{{ pr.kind }}</span>
            <h2>{{ pr.name }}</h2>
            <p class="lead">{{ pr.blurb }}</p>

            <ul class="bullets">
              @for (pt of pr.points; track pt) {
                <li>{{ pt }}</li>
              }
            </ul>

            <div class="tags">
              @for (t of pr.stack; track t) {
                <span class="tag">{{ t }}</span>
              }
            </div>

            <div class="btn-row">
              @for (l of pr.links; track l.url) {
                <a [href]="l.url" target="_blank" rel="noopener" class="btn btn-primary">{{ l.label }} ↗</a>
              }
            </div>
          </div>
        </article>
      }
    </section>

    <section class="container section center">
      <p class="muted">More code on my GitHub.</p>
      <a [href]="p.github" target="_blank" rel="noopener" class="btn btn-ghost">Visit GitHub ↗</a>
    </section>
  `,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly p = PROFILE;
}
