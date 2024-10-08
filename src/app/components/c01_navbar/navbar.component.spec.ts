import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the navbar', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.componentInstance;
    expect(navbar).toBeTruthy();
  });

  it(`should have as title 'navbar'`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.componentInstance;
    expect(navbar.title).toEqual('navbar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('navbar navbar is running!');
  });
});
