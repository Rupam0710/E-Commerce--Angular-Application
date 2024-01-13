import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';
import { Router } from '@angular/router';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate to checkout when the checkout button is clicked', () => {
    spyOn(router, 'navigate');


    component.navigateToCheckout();


    expect(router.navigate).toHaveBeenCalledWith(['checkout']);
  });
})