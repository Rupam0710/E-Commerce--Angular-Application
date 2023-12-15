import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NavContentComponent } from './navbar/nav-content/nav-content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent,
    HomeProductCardComponent,
    ProductSliderComponent,
    NavbarComponent,
    NavContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
