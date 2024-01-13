import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AddressFormComponent } from './address-form.component';
import { FeatureModule } from '../../../feature.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddressFormComponent', () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let toastrSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    toastrSpy = jasmine.createSpyObj('ToastrService', ['warning']);

    TestBed.configureTestingModule({
      declarations: [AddressFormComponent],
      imports: [ReactiveFormsModule, FeatureModule, NoopAnimationsModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastrSpy },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: of({ get: (param: string) => '20' }) } },
        },
      ],
    });

    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to payment when the form is valid', () => {

    component.myForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      streetAddress: '123 Main St',
      city: 'City',
      state: 'State',
      zipCode: '12345',
      mobile: '1234567890',
    });


    component.onNavigate();


    expect(routerSpy.navigate).toHaveBeenCalledWith(['payment/20'], { relativeTo: jasmine.anything() });
  });


  it('should show a warning message when the form is invalid', () => {

    component.onNavigate();


    expect(toastrSpy.warning).toHaveBeenCalledWith('Please fill in the shopping address to proceed to payment');
  });
})