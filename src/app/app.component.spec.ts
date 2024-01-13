import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'e-commerce'`, () => {
    expect(component.title).toEqual('e-commerce');
  });

  it('should render app-navbar', () => {
    const navbarElement = fixture.nativeElement.querySelector('app-navbar');
    expect(navbarElement).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const routerOutletElement = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutletElement).toBeTruthy();
  });

  it('should render app-footer', () => {
    const footerElement = fixture.nativeElement.querySelector('app-footer');
    expect(footerElement).toBeTruthy();
  });



});
