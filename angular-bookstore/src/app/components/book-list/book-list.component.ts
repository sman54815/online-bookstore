import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]=[]
  currentCategoryId: number=1
  pageSize: number = 2
  currentPage: number = 1
  totalRecords: number = 0
  totalPages:number = 0
  
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute,private _config:NgbPaginationConfig) {
    this._config.maxSize=3
   }

  ngOnInit(): void {
    // this.getBookList()
    this.activatedRoute.paramMap.subscribe(res => {
      this.currentPage=1
      this.getBookList();
    })
    // this.handleBookSearchBooks()
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
    this.bookService.getBooksByName(Keyword,this.pageSize, (this.currentPage - 1)).subscribe(this.processPaginate())
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
  processPaginate(){
    return res => {
      console.log(res);
      console.log("sssssssssssssssssss"+res["_embedded"]);

      this.books = res['_embedded']['books'];
      this.totalRecords = res['page']['totalElements']
      this.currentPage = res['page']['number']+1
      this.pageSize = res['page']['size']
      this.totalPages = res['page']['totalPages']
      console.log(this.books);
      console.log(this.totalRecords);
      console.log(this.currentPage);
      console.log(this.totalPages);



    }
  }
}

