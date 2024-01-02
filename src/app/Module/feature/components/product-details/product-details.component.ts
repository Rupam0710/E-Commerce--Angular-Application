import { Component, OnInit } from '@angular/core';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  selectedSize: any;
  reviews = [1, 1, 1];
  relatedProducts: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.relatedProducts = mens_kurta;
  }
  handleAddToCart() {
    console.log("selected size", this.selectedSize);
    this.router.navigate(['cart'])

  }
}
