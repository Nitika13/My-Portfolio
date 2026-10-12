import { Component } from '@angular/core';
import { EXPERIENCE } from '../data';

@Component({
  selector: 'app-experience',
  template: `
    <section class="container page-head">
      <p class="eyebrow">Experience</p>
      <h1>Where I've worked.</h1>
    </section>

    <section class="container timeline">
      @for (job of jobs; track job.company) {
        <article class="timeline-item">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="panel">
            <header class="job-head">
              <div>
                <h2 class="job-company">{{ job.company }}</h2>
                <p class="job-role">{{ job.role }}</p>
              </div>
              <div class="job-meta">
                <span class="chip">{{ job.period }}</span>
                <span class="muted">{{ job.place }}</span>
              </div>
            </header>

            <ul class="bullets">
              @for (pt of job.points; track pt) {
                <li>{{ pt }}</li>
              }
            </ul>

            <div class="tags">
              @for (t of job.stack; track t) {
                <span class="tag">{{ t }}</span>
              }
            </div>
          </div>
        </article>
      }
    </section>
  `,
})
export class Experience {
  protected readonly jobs = EXPERIENCE;
}
