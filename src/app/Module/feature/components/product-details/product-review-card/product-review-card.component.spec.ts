import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewCardComponent } from './product-review-card.component';
import { FeatureModule } from '../../../feature.module';

describe('ProductReviewCardComponent', () => {
  let component: ProductReviewCardComponent;
  let fixture: ComponentFixture<ProductReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureModule],
      declarations: [ProductReviewCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.font-semibold').textContent).toContain('Maria');
  });

  it('should render the user rating', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-star-rating')).toBeTruthy();
  });

  it('should render the user review', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p:last-child').textContent).toContain('Dec 21, 2023');
  });


});
