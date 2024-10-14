import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartComponent } from './mycart.component';

describe('SelectitemComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
