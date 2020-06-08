import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = []
  currentCategoryId: number = 1
  pageSize: number = 2
  currentPage: number = 1
  totalRecords: number = 0
  totalPages: number = 0

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private _config: NgbPaginationConfig,
    private cartService: CartService,
    private spinner: NgxSpinnerService
  ) {
    this._config.maxSize = 3
  }

  ngOnInit(): void {
    this.spinner.show();

    this.activatedRoute.paramMap.subscribe(res => {
      this.currentPage = 1
      this.getBookList();
    })
  }
  getBookList() {
    const hasKeyword: boolean = this.activatedRoute.snapshot.paramMap.has("keyword")
    if (hasKeyword) {
      this.handleBookSearchBooks()
    }
    else {
      this.handleListBooks()
    }
  }
  handleBookSearchBooks() {
    // keyword
    const Keyword: string = this.activatedRoute.snapshot.paramMap.get("keyword")
    this.bookService.getBooksByName(Keyword, this.pageSize, (this.currentPage - 1)).subscribe(this.processPaginate())
  }
  handleListBooks() {
    const hasCategory: boolean = this.activatedRoute.snapshot.paramMap.has("id");
    if (hasCategory) {
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get("id")
    } else {
      this.currentCategoryId = 1
    }

    this.bookService.getBooksByIdAndPage(this.currentCategoryId, this.pageSize, (this.currentPage - 1)).subscribe(this.processPaginate())

  }
  updatePageSize(pageSize: number) {
    this.getBookList()

  }
  processPaginate() {
    return res => {
      this.books = res['_embedded']['books'];
      this.totalRecords = res['page']['totalElements']
      this.currentPage = res['page']['number'] + 1
      this.pageSize = res['page']['size']
      this.totalPages = res['page']['totalPages']
      // this.spinner.hide();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);

    }
  }
  addToCart(book: Book): void {
    const cartItem = new CartItem(book);
    this.cartService.addCart(cartItem)
  }
}

