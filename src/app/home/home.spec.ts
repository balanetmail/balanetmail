import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import resume from '../../assets/resume.json';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the name and title from resume.json', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(resume.name);
    expect(compiled.querySelector('.title')?.textContent).toContain(resume.title);
  });

  it('should render highlights and one article per job', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.highlights li').length).toBe(resume.about.highlights.length);
    expect(compiled.querySelectorAll('.experience article').length).toBe(resume.experience.length);
  });
});
