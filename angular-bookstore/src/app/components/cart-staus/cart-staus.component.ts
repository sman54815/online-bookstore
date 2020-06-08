import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-staus',
  templateUrl: './cart-staus.component.html',
  styleUrls: ['./cart-staus.component.css']
})
export class CartStausComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
    this.cartService.totalPrice.subscribe(res => {
      console.log(res);
      this.totalPrice = res
    })
    this.cartService.totalQuantity.subscribe(res => {
      console.log(res);
      this.totalQuantity = res

    })
  }
}
