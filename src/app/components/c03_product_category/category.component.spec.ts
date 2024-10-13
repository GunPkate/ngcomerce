import { TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CategoryComponent
      ],
    }).compileComponents();
  });

  it('should create the Category', () => {
    const fixture = TestBed.createComponent(CategoryComponent);
    const category = fixture.componentInstance;
    expect(category).toBeTruthy();
  });

  it(`should have as title 'Category'`, () => {
    const fixture = TestBed.createComponent(CategoryComponent);
    const category = fixture.componentInstance;
    expect(category.title).toEqual('Category');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CategoryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('category  is running!');
  });
});
