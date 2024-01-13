import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should have sections with specified headings and paragraphs', () => {
    const sections = fixture.nativeElement.querySelectorAll('.px-4');

    sections.forEach((section) => {
      const heading = section.querySelector('h1');
      const paragraphs = section.querySelectorAll('p');

      expect(heading).toBeTruthy();
      expect(paragraphs.length).toBeGreaterThan(0);
    });
  });

});
