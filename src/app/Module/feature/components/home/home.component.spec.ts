import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { lengha_page1 } from '../../../../../Data/Women/lenghaCholi';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../../../Data/shoes';
import { FeatureModule } from '../../feature.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureModule, RouterTestingModule],
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize menJeans, womenGouns, lenghaCholi, mensKurta, and mensShoes on ngOnInit', () => {
  //   fixture.detectChanges();
  //   expect(component.menJeans).toEqual(menJeans.slice(0, 5));
  //   expect(component.womenGouns).toEqual(gounsPage1.slice(0, 5));
  //   expect(component.lenghaCholi).toEqual(lengha_page1.slice(0, 5));
  //   expect(component.mensKurta).toEqual(mens_kurta.slice(0, 5));
  //   expect(component.mensShoes).toEqual(mensShoesPage1.slice(0, 5));
  // });

})