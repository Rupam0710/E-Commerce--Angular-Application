// product-card.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    });

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render product details correctly', () => {
    const mockProduct = {
      imageUrl: 'http://localhost:9876/mock-image-url',
      brand: 'Mock Brand',
      title: 'Mock Title',
      color: 'Mock Color',
      discountedPrice: 100,
      price: 120,
      discount: 20,
    };

    component.product = mockProduct;
    fixture.detectChanges();

    const productCardElement = debugElement.query(By.css('.productCard'));

    expect(productCardElement).toBeTruthy();

    const imageElement = productCardElement.query(By.css('img'));
    expect(imageElement.nativeElement.src).toBe(mockProduct.imageUrl);

    const brandElement = productCardElement.query(By.css('.opacity-80'));
    expect(brandElement.nativeElement.textContent).toBe(mockProduct.brand);

    const titleElement = productCardElement.query(By.css('.textPart p:nth-child(2)'));
    expect(titleElement.nativeElement.textContent).toBe(mockProduct.title);

    const colorElement = productCardElement.query(By.css('.textPart p:nth-child(3)'));
    expect(colorElement.nativeElement.textContent).toBe(mockProduct.color);

    const discountedPriceElement = productCardElement.query(By.css('.font-bold'));
    expect(discountedPriceElement.nativeElement.textContent).toContain(`₹${mockProduct.discountedPrice}`);

    const priceElement = productCardElement.query(By.css('.text-gray-600.line-through'));
    expect(priceElement.nativeElement.textContent).toContain(`₹${mockProduct.price}`);


  });

  it('should call navigate method on click', () => {
    spyOn(component, 'navigate');

    const productCardElement = debugElement.query(By.css('.productCard'));
    productCardElement.triggerEventHandler('click', null);

    expect(component.navigate).toHaveBeenCalled();
  });
});
