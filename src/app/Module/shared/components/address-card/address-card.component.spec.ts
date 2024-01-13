import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCardComponent } from './address-card.component';



describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The Number of Paragraphs should be greater than 0', () => {
    const sections = fixture.nativeElement.querySelectorAll('.space-y-3');
    sections.forEach((section) => {
      const paragraphs = section.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThan(0);
    })
  })


});
