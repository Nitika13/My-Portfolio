import { Component } from '@angular/core';
import { CERTS, SKILLS } from '../data';

@Component({
  selector: 'app-skills',
  template: `
    <section class="container page-head">
      <p class="eyebrow">Skills</p>
      <h1>My toolkit.</h1>
    </section>

    <section class="container grid-3 skills-grid">
      @for (g of groups; track g.title) {
        <div class="panel skill-card">
          <div class="skill-icon" aria-hidden="true">{{ g.icon }}</div>
          <h3>{{ g.title }}</h3>
          <div class="tags">
            @for (it of g.items; track it) {
              <span class="tag">{{ it }}</span>
            }
          </div>
        </div>
      }
    </section>

    <section class="container section">
      <h2>Certifications</h2>
      <div class="grid-2">
        @for (c of certs; track c.title) {
          <div class="panel cert">
            <span class="chip">{{ c.date }}</span>
            <h3>{{ c.title }}</h3>
            <p class="muted">{{ c.topics }}</p>
            <a [href]="c.url" target="_blank" rel="noopener" class="text-link">View certificate ↗</a>
          </div>
        }
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly groups = SKILLS;
  protected readonly certs = CERTS;
}
