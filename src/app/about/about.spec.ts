import { TestBed } from '@angular/core/testing';
import { About } from './about';
import resume from '../../assets/resume.json';

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();
  });

  it('should render the About me heading', async () => {
    const fixture = TestBed.createComponent(About);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('About me');
  });

  it('should render summary and highlights from resume.json', async () => {
    const fixture = TestBed.createComponent(About);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.name')?.textContent).toContain(resume.name);
    expect(compiled.querySelectorAll('.summary').length).toBe(resume.about.summary.length);
    expect(compiled.querySelectorAll('.highlights li').length).toBe(resume.about.highlights.length);
  });
});
