import { Component, OnInit } from '@angular/core';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  selectedSize: any;
  reviews = [1, 1, 1];
  relatedProducts: any;

  ngOnInit(): void {
    this.relatedProducts = mens_kurta;
  }
  handleAddToCart() {
    console.log("selected size", this.selectedSize);

  }
}
