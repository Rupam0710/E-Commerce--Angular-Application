import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
    });

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLoggedIn to true', () => {
    expect(component.isLoggedIn).toBe(true);
  });

  it('should toggle isLoggedIn when changeTemplate is called', () => {
    component.changeTemplate();
    expect(component.isLoggedIn).toBe(false);

    component.changeTemplate();
    expect(component.isLoggedIn).toBe(true);
  });
})