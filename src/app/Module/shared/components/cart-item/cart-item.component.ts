import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() showButton: any;

  public updateCartItem(num: Number) {
    console.log("num", num);

  }

  public removeCartItem() {
    console.log("remove cart item");

  }
}
