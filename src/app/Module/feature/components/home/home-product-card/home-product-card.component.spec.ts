import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductCardComponent } from './home-product-card.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HomeProductCardComponent', () => {
  let component: HomeProductCardComponent;
  let fixture: ComponentFixture<HomeProductCardComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductCardComponent],
    });

    fixture = TestBed.createComponent(HomeProductCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render product details correctly', () => {

    component.product = {
      imageUrl: 'http://localhost:9876/mock-image-url',
      brand: 'Mock Brand',
      title: 'Mock Product',
    };


    fixture.detectChanges();

    const productCardElement = debugElement.query(By.css('.box'));

    const imageElement = productCardElement.query(By.css('img'));
    expect(imageElement.nativeElement.src).toBe(component.product.imageUrl);

    const brandElement = fixture.nativeElement.querySelector('.font-medium.text-gray-900.text-sm');
    expect(brandElement).toBeTruthy();
    expect(brandElement.textContent.trim()).toBe('Mock Brand');

    const titleElement = fixture.nativeElement.querySelector('.mt-2.text-gray-500');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent.trim()).toBe('Mock Product');




  });
});
