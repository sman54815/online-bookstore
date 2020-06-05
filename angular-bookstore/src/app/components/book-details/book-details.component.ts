import { Book } from './../../common/book';
import { BookService } from './../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetail: Book;
  currentCategoryId: number=1
  pageSize: number = 2
  currentPage: number = 1
  totalRecords: number = 0
  totalPages:number = 0
  
  constructor(public activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res=>{
      this.getBokDetails()
    })
  }
  getBokDetails() {
    const id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.bookService.getBooksById(id).subscribe(res => {
      console.log(res);

      this.bookDetail = res;
    })
  }
  addToCart() {

  }
}
