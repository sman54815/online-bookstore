import { CartItem } from './../common/cart-item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = []
  totalPrice: Subject<number> = new Subject<number>()
  totalQuantity: Subject<number> = new Subject<number>()
  constructor() { }
  addCart(cartItem: CartItem) {
    console.log(cartItem);
    // check whether book/item is already exist in the cart 
    let alreadyExistInCart: boolean = false
    let existingCartItem: CartItem = undefined
    if (this.cartItems.length > 0) {
      let existingCartItem = this.cartItems.find(a => a.id === cartItem.id)
      alreadyExistInCart = (existingCartItem != undefined)
    }
    if (alreadyExistInCart) {
      let existingCartItem = this.cartItems.find(a => a.id === cartItem.id)

      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(cartItem);

    }
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    let totlaPriceValue: number = 0
    let totlaQuantityValue: number = 0
    // clac total price and total quantity  
    for (let index of this.cartItems) {
      totlaPriceValue += index.quantity * index.unitPrice
      totlaQuantityValue += index.quantity
    }
    console.log(`total price : ${totlaPriceValue} total quantity : ${totlaQuantityValue} `);
    // publish events
    this.totalPrice.next(totlaPriceValue)
    this.totalQuantity.next(totlaQuantityValue)
  }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;
    this.calculateTotalPrice();
  }
  remove(cartItem:CartItem){
    const itemIndex= this.cartItems.findIndex(a=>a.id===cartItem.id);
    if(itemIndex>-1){
      this.cartItems.splice(itemIndex,1);
      this.calculateTotalPrice()
    }
  }

}

