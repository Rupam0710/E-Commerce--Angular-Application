import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { FeatureModule } from '../../feature.module';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FeatureModule],
      declarations: [ProductDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize relatedProducts with mens_kurta on ngOnInit', () => {
    fixture.detectChanges();
    expect(component.relatedProducts).toEqual(mens_kurta);
  });


});
