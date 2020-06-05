import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartStausComponent } from './cart-staus.component';

describe('CartStausComponent', () => {
  let component: CartStausComponent;
  let fixture: ComponentFixture<CartStausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartStausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartStausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
