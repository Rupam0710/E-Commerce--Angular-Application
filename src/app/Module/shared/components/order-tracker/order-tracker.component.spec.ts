import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackerComponent } from './order-tracker.component';
import { SharedModule } from '../../shared.module';

describe('OrderTrackerComponent', () => {
  let component: OrderTrackerComponent;
  let fixture: ComponentFixture<OrderTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderTrackerComponent],
      imports: [SharedModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of steps', () => {
    component.steps = [
      { title: 'Step 1', id: 1 },
      { title: 'Step 2', id: 2 },
      { title: 'Step 3', id: 3 },
    ];

    fixture.detectChanges();

    const stepElements = fixture.nativeElement.querySelectorAll('.flex.justify-between.items-center.space-x-5');
    expect(stepElements.length).toBe(component.steps.length);
  })

  it('should apply correct styles based on activeStep', () => {
    component.steps = [
      { title: 'Step 1', id: 1 },
      { title: 'Step 2', id: 2 },
      { title: 'Step 3', id: 3 },
    ];

    component.activeStep = 'Step 2';

    fixture.detectChanges();

    const stepElements = fixture.nativeElement.querySelectorAll('.flex.justify-between.items-center.space-x-5');
    expect(stepElements.length).toBe(component.steps.length);

    const step2Element = stepElements[1];


    expect(step2Element.querySelector('.bg-green-500')).toBeTruthy();
    expect(step2Element.querySelector('.bg-gray-300')).toBeFalsy();
  });
});
