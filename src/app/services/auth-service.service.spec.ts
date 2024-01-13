import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth-service.service';



describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService]
    });

    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should call ProceedRegister and return data', () => {
    const mockUserData = { username: 'testUser', password: 'testPassword' };

    authService.ProceedRegister(mockUserData).subscribe((data) => {
      expect(data).toBeTruthy();

    });

    const req = httpTestingController.expectOne(`${authService['apiUrl']}`);
    expect(req.request.method).toEqual('POST');
    req.flush({ success: true });
  });

  it('should call GetUsersData and return data', () => {
    authService.GetUsersData().subscribe((data) => {
      expect(data).toBeTruthy();

    });

    const req = httpTestingController.expectOne(`${authService['apiUrl']}`);
    expect(req.request.method).toEqual('GET');
    req.flush({ success: true });
  });

  it('should return true when isLoggedIn is called after login', () => {
    authService.login();
    const isLoggedIn = authService.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });

  it('should return false when isLoggedIn is called after logout', () => {
    authService.logout();
    const isLoggedIn = authService.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();
  });
});
