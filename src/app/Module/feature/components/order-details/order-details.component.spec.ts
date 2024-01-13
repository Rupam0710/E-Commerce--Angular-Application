import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsComponent } from './order-details.component';
import { FeatureModule } from '../../feature.module';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureModule],
      declarations: [OrderDetailsComponent],
    });

    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an initial orders array', () => {
    expect(component.orders).toEqual([1, 1, 1]);
  });


  it('should have an initial steps array', () => {
    expect(component.steps).toEqual([
      { id: 0, title: "PLACED", isCompleted: true },
      { id: 1, title: "CONFIRMED", isCompleted: true },
      { id: 2, title: "SHIPPED", isCompleted: false },
      { id: 3, title: "DELIVERED", isCompleted: false },
    ]);
  });

  it('should mark steps as completed based on orders array length', () => {
    component.orders = [1, 1, 1];
    fixture.detectChanges();
    expect(component.steps[2].isCompleted).toBe(false);
    expect(component.steps[3].isCompleted).toBe(false);
  });
})
