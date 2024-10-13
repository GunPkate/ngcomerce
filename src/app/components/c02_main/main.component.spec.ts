import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
    }).compileComponents();
  });

  it('should create the main', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const main = fixture.componentInstance;
    expect(main).toBeTruthy();
  });

  it(`should have as title 'main'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const main = fixture.componentInstance;
    expect(main.title).toEqual('main');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('main main is running!');
  });
});
