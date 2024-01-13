import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an initial orderFilter array', () => {
    expect(component.orderFilter).toEqual([
      { value: "on_the_way", label: "On the Way" },
      { value: "delivered", label: "Delivered" },
      { value: "cancelled", label: "Cancelled" },
      { value: "returned", label: "Returned" },
    ]);
  });

  it('should have an initial orders array', () => {
    expect(component.orders).toEqual([[1, 1], [1, 1, 1]]);
  });

  it('should navigate to order details page when calling navigateToOrderDetails', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.navigateToOrderDetails(1);

    expect(navigateSpy).toHaveBeenCalledWith(['order/1']);
  });
})