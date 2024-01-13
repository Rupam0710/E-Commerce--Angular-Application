import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';
import { ProductSliderComponent } from './product-slider.component';

describe('ProductSliderComponent', () => {
  let component: ProductSliderComponent;
  let fixture: ComponentFixture<ProductSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderComponent, HomeProductCardComponent],
    });
    fixture = TestBed.createComponent(ProductSliderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const title = 'Test Title';
    component.title = title;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(title);
  });

  it('should render product cards', () => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },

    ];

    component.products = products;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const productCardElements = compiled.querySelectorAll('app-home-product-card');

    expect(productCardElements.length).toBe(products.length);


  });
})