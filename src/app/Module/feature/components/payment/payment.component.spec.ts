import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../services/auth-service.service';
import { PaymentComponent } from './payment.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from '../../feature.module';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let toastrService: ToastrService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, FeatureModule],
      declarations: [PaymentComponent],
      providers: [ToastrService, AuthService],
    });

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show warning message if user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    spyOn(toastrService, 'warning');

    component.payNow();

    expect(toastrService.warning).toHaveBeenCalledWith('Please login , to continue with payment');
  });


})