import { TestBed } from '@angular/core/testing';
import { ItemlistComponent } from './itemlist.component';

describe('ItemlistComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ItemlistComponent
      ],
    }).compileComponents();
  });

  it('should create the Itemlist', () => {
    const fixture = TestBed.createComponent(ItemlistComponent);
    const itemlist = fixture.componentInstance;
    expect(itemlist).toBeTruthy();
  });

  it(`should have as title 'Itemlist'`, () => {
    const fixture = TestBed.createComponent(ItemlistComponent);
    const itemlist = fixture.componentInstance;
    expect(itemlist.title).toEqual('Itemlist');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ItemlistComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Itemlist is running!');
  });
});
