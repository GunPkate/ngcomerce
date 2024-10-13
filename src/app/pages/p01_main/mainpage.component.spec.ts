import { TestBed } from '@angular/core/testing';
import { MainPageComponent } from './mainpage.component';

describe('MainPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent
      ],
    }).compileComponents();
  });

  it('should create the mainpage', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const mainpage = fixture.componentInstance;
    expect(mainpage).toBeTruthy();
  });

  it(`should have as title 'mainpage'`, () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const mainpage = fixture.componentInstance;
    expect(mainpage.title).toEqual('mainpage');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mainpage is running!');
  });
});
