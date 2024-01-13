import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from './signup.component';
import { AuthService } from '../../../services/auth-service.service';
import { of } from 'rxjs';
import { AuthModule } from '../auth.module';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['ProceedRegister']);
    toastrService = jasmine.createSpyObj('ToastrService', ['success', 'warning']);
    dialog = jasmine.createSpyObj('MatDialog', ['closeAll']);

    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authService },
        { provide: ToastrService, useValue: toastrService },
        { provide: MatDialog, useValue: dialog },
      ],
      imports: [ReactiveFormsModule, AuthModule],
    });

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show warning for invalid form', () => {
    component.loginForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: '',
    });
    component.submitForm();

    expect(authService.ProceedRegister).not.toHaveBeenCalled();
    expect(toastrService.warning).toHaveBeenCalledWith('Please enter valid data');
  });
})