import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SigninComponent } from './signin.component';
import { AuthService } from '../../../services/auth-service.service';
import { AuthModule } from '../auth.module';

describe('SigninComponent', () => {
    let component: SigninComponent;
    let fixture: ComponentFixture<SigninComponent>;
    let authService: jasmine.SpyObj<AuthService>;
    let toastrService: jasmine.SpyObj<ToastrService>;
    let dialog: jasmine.SpyObj<MatDialog>;
    let router: jasmine.SpyObj<Router>;

    beforeEach(() => {
        authService = jasmine.createSpyObj('AuthService', ['GetUsersData', 'login']);
        toastrService = jasmine.createSpyObj('ToastrService', ['success', 'error', 'warning']);
        dialog = jasmine.createSpyObj('MatDialog', ['closeAll']);
        router = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            declarations: [SigninComponent],
            providers: [
                FormBuilder,
                { provide: AuthService, useValue: authService },
                { provide: ToastrService, useValue: toastrService },
                { provide: MatDialog, useValue: dialog },
                { provide: Router, useValue: router },
            ],
            imports: [ReactiveFormsModule, AuthModule],
        });

        fixture = TestBed.createComponent(SigninComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should submit form and successfully login', () => {
        authService.GetUsersData.and.returnValue(of([{ email: 'test@example.com', password: 'password', firstName: 'John' }]));

        component.loginForm.setValue({ email: 'test@example.com', password: 'password' });
        component.submitForm();

        expect(authService.GetUsersData).toHaveBeenCalled();
        expect(component.userdata).toBeTruthy();
        expect(toastrService.success).toHaveBeenCalledWith('You are successfully login');
        expect(localStorage.getItem('username')).toBe('John');
        expect(authService.login).toHaveBeenCalled();
        expect(dialog.closeAll).toHaveBeenCalled();
    });

    it('should submit form and show error for invalid credentials', () => {
        authService.GetUsersData.and.returnValue(of([{ email: 'test@example.com', password: 'password', firstName: 'John' }]));

        component.loginForm.setValue({ email: 'test@example.com', password: 'wrongpassword' });
        component.submitForm();

        expect(authService.GetUsersData).toHaveBeenCalled();
        expect(component.userdata).toBeFalsy();
        expect(toastrService.error).toHaveBeenCalledWith('Invalid Credentials');
    });

    it('should submit form and show warning for invalid form', () => {
        component.loginForm.setValue({ email: 'test@example.com', password: '12' });
        component.submitForm();

        expect(authService.GetUsersData).not.toHaveBeenCalled();
        expect(toastrService.warning).toHaveBeenCalledWith('User not found');
    });
})