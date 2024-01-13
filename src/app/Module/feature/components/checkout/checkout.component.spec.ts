import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressFormComponent } from './address-form/address-form.component';
import { CheckoutComponent } from './checkout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { FeatureModule } from '../../feature.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastrModule.forRoot(), FeatureModule, NoopAnimationsModule],
      declarations: [
        CheckoutComponent,
        AddressFormComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display the heading text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.text-center').textContent).toContain('ADD SHIPPING ADDRESS');
  });

  it('should render app-address-form component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-address-form')).toBeTruthy();
  });
});