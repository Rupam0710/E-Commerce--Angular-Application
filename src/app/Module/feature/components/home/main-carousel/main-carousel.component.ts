import { Component, OnInit } from '@angular/core';
import { homeCarouselData } from '../../../../../../Data/mainCarousal';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent implements OnInit {
  carouselData: any;

  currentSlide = 0;
  interval: any;

  ngOnInit(): void {
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }

  public autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  public nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
