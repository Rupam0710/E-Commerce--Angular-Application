// star-rating.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let fixture: ComponentFixture<StarRatingComponent>;
  let component: StarRatingComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarRatingComponent],
      imports: [MatIconModule],
    });

    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });



  it('should call rate method on star click', () => {
    spyOn(component, 'rate');

    component.stars = [1, 2, 3, 4, 5];

    fixture.detectChanges();

    const starElement = debugElement.query(By.css('.star'));

    starElement.triggerEventHandler('click', null);

    expect(component.rate).toHaveBeenCalledWith(component.stars[0]);
  });
});
