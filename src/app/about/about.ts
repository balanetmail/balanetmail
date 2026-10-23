import { Component } from '@angular/core';
import resume from '../../assets/resume.json';

@Component({
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly resume = resume;
}
