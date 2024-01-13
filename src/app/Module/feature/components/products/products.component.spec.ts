import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ProductsComponent } from './products.component';
import { filters, singleFilter } from './FilterData';
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';
import { MatMenuModule } from '@angular/material/menu';
import { FeatureModule } from '../../feature.module';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, FeatureModule],
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { queryParams: {} },
            queryParams: of({}),
          },
        },
        Router,
      ],
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize filterData, singleFilterData, and menPants on ngOnInit', () => {
    fixture.detectChanges();
    expect(component.filterData).toEqual(filters);
    expect(component.singleFilterData).toEqual(singleFilter);
    expect(component.menPants).toEqual(mensPantsPage1);
  });

  it('should handle multiple select filter and navigate to correct URL', () => {
    spyOn(router, 'navigate');
    component.handleMultipleSelectFilter('value1', 'section1');
    expect(router.navigate).toHaveBeenCalledWith([], {
      queryParams: { section1: 'value1' },
    });
  });

  it('should handle single select filter and navigate to correct URL', () => {
    spyOn(router, 'navigate');
    component.handleSingleSelectFilter('value2', 'section2');
    expect(router.navigate).toHaveBeenCalledWith([], {
      queryParams: { section2: 'value2' },
    });
  });
})