import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent
  ]
})
export class SharedModule { }
