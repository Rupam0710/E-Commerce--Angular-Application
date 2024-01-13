import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavContentComponent } from './nav-content.component';
import { By } from '@angular/platform-browser';
import { navigation } from './nav-content';

describe('NavContentComponent', () => {
  let component: NavContentComponent;
  let fixture: ComponentFixture<NavContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavContentComponent]
    });

    fixture = TestBed.createComponent(NavContentComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });



  it('should display the subsection buttons when selected section is passed', () => {
    component.selectedSection = 'men';
    fixture.detectChanges();
    const subsectionButtons = fixture.debugElement.queryAll(By.css('button'));
    expect(subsectionButtons.length).toBeGreaterThan(0);
  });

  it('should display the images when selected section is passed', () => {
    component.selectedSection = 'men';
    fixture.detectChanges();
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toBeGreaterThan(0);
  });
});