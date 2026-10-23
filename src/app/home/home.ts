import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import resume from '../../assets/resume.json';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly resume = resume;
}
