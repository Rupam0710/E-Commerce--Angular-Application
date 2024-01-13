import { ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { MainCarouselComponent } from './main-carousel.component';
import { homeCarouselData } from '../../../../../../Data/mainCarousal';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainCarouselComponent', () => {
  let component: MainCarouselComponent;
  let fixture: ComponentFixture<MainCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainCarouselComponent],
    });
    fixture = TestBed.createComponent(MainCarouselComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize carouselData on ngOnInit', () => {
    fixture.detectChanges();
    expect(component.carouselData).toEqual(homeCarouselData);
  });

  it('should set currentSlide to 0 on ngOnInit', () => {
    fixture.detectChanges();
    expect(component.currentSlide).toBe(0);
  });

  it('should start autoPlay on ngOnInit', fakeAsync(() => {
    spyOn(component, 'autoPlay');
    fixture.detectChanges();
    tick(1);
    expect(component.autoPlay).toHaveBeenCalled();
  }));



  it('should update currentSlide when calling nextSlide', () => {
    component.carouselData = {
      length: 10,
    }
    const initialSlide = component.currentSlide;
    component.nextSlide();
    expect(component.currentSlide).toBe((initialSlide + 1) % component.carouselData.length);
  });

  it('should reset currentSlide after reaching the end of the carouselData', () => {
    component.carouselData = {
      length: 10,
    }
    component.currentSlide = component.carouselData.length - 1;
    component.nextSlide();
    expect(component.currentSlide).toBe(0);
  });
})