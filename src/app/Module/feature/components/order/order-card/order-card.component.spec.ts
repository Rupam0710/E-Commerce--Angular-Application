import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { OrderCardComponent } from './order-card.component';

describe('OrderCardComponent', () => {
  let component: OrderCardComponent;
  let fixture: ComponentFixture<OrderCardComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCardComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(OrderCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to order details page when order id is passed', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.navigateToOrderDetails(1);

    expect(navigateSpy).toHaveBeenCalledWith(['orders/1']);
  });
})