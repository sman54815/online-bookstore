import { Book } from './book';
export class CartItem {
    id?: number
    name?: string
    unitPrice?: number
    imageUrl?: string
    quantity: number

    constructor(private book: Book) {
        this.id = this.book.id
        this.name = this.book.name
        this.unitPrice = this.book.unitPrice
        this.imageUrl = this.book.imageUrl
        this.quantity = 1


    }

}
