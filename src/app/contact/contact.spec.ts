import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import resume from '../../assets/resume.json';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();
  });

  it('should render the phone and email from resume.json', async () => {
    const fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Contact');
    expect(compiled.querySelector(`a[href="tel:+919980845945"]`)?.textContent).toContain(
      resume.contact.phone,
    );
    expect(compiled.querySelector(`a[href="mailto:${resume.contact.email}"]`)).toBeTruthy();
  });
});
