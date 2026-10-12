import { Component } from '@angular/core';
import { PROFILE } from '../data';

@Component({
  selector: 'app-contact',
  template: `
    <section class="container page-head">
      <p class="eyebrow">Contact</p>
      <h1>Let's work together.</h1>
      <p class="lead">
        I'm open to software engineering opportunities. The quickest way to reach me is email.
      </p>
    </section>

    <section class="container contact-grid">
      <div class="contact-cards">
        <a class="panel contact-card" [href]="'mailto:' + p.email">
          <span class="muted">Email</span>
          <strong>{{ p.email }}</strong>
        </a>
        <a class="panel contact-card" [href]="'tel:' + p.phone">
          <span class="muted">Phone</span>
          <strong>{{ p.phone }}</strong>
        </a>
        <a class="panel contact-card" [href]="p.linkedin" target="_blank" rel="noopener">
          <span class="muted">LinkedIn</span>
          <strong>nitika-6ab64024a ↗</strong>
        </a>
        <a class="panel contact-card" [href]="p.github" target="_blank" rel="noopener">
          <span class="muted">GitHub</span>
          <strong>Nitika13 ↗</strong>
        </a>
        <a class="panel contact-card" [href]="p.leetcode" target="_blank" rel="noopener">
          <span class="muted">LeetCode</span>
          <strong>nitika__ ↗</strong>
        </a>
      </div>

      <form class="panel form" (submit)="send($event, name.value, msg.value)">
        <h3>Send a quick message</h3>
        <p class="muted">This opens your email app with the message ready to send.</p>
        <label>
          Your name
          <input #name type="text" name="name" placeholder="Jane Doe" required />
        </label>
        <label>
          Message
          <textarea #msg name="message" rows="5" placeholder="Hi Nitika, ..." required></textarea>
        </label>
        <button type="submit" class="btn btn-primary">Compose email</button>
      </form>
    </section>
  `,
})
export class Contact {
  protected readonly p = PROFILE;

  protected send(event: Event, name: string, message: string) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}`);
    window.location.href = `mailto:${this.p.email}?subject=${subject}&body=${body}`;
  }
}
