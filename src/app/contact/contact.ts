import { Component } from '@angular/core';
import resume from '../../assets/resume.json';

@Component({
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly resume = resume;
  protected readonly tel = resume.contact.phone.replace(/\s/g, '');
}
