import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';



describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should call updateCartItem method with the correct parameter', () => {
    spyOn(console, 'log');
    const num = 42;
    component.updateCartItem(num);
    expect(console.log).toHaveBeenCalledWith('num', num);
  });

  it('should call removeCartItem method', () => {
    spyOn(console, 'log');
    component.removeCartItem();
    expect(console.log).toHaveBeenCalledWith('remove cart item');
  });
});
