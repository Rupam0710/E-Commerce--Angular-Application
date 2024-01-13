import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NavbarComponent } from './navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth-service.service';
import { AuthComponent } from '../../../auth/auth.component';

describe('NavBar Component', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  let authService: jasmine.SpyObj<AuthService>;
  let dialog: jasmine.SpyObj<MatDialog>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: MatDialog, useValue: dialogSpy },
      ],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open navbar content when openNavbarContent is called', () => {
    const section = 'exampleSection';
    component.openNavbarContent(section);

    expect(component.isNavbarContentOpen).toBeTrue();
    expect(component.currentSection).toBe(section);
  });

  it('should close navbar content when closeNavbarContent is called', () => {
    component.closeNavbarContent();

    expect(component.isNavbarContentOpen).toBeFalse();
  });

  it('should navigate to the specified path when navigateTo is called', () => {
    const path = 'examplePath';
    const routerSpy = spyOn(component.router, 'navigate');

    component.navigateTo(path);

    expect(routerSpy).toHaveBeenCalledWith([path]);
  });

  it('should open the login modal when handleOpenLoginModal is called', () => {
    component.handleOpenLoginModal();

    expect(dialog.open).toHaveBeenCalledWith(AuthComponent, {
      width: '400px',
      disableClose: false,
    });
  });

  it('should set the name property with the value from local storage on ngOnInit', () => {
    const username = 'exampleUser';
    spyOn(localStorage, 'getItem').and.returnValue(username);

    component.ngOnInit();

    expect(component.name).toBe(username);
  });



  it('should call authService.logout when logOut is called', () => {
    component.logOut();

    expect(authService.logout).toHaveBeenCalled();
  });

});
