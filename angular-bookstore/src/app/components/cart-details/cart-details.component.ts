import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  countries = []
  cartItems: CartItem[] = []
  totalPrice: number = 0
  totalQuantity: number = 0
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartDetails()
  }
  cartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(res => {
      this.totalPrice = res
    })
    this.cartService.totalQuantity.subscribe(res => {
      this.totalQuantity = res
    })
    this.cartService.calculateTotalPrice()
  }
  incrementQuantity(cartItem: CartItem) {
    this.cartService.addCart(cartItem);
  }
  decrementQuantity(cartItem: CartItem) {
    this.cartService.decrementQuantity(cartItem);
  }
  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

}
