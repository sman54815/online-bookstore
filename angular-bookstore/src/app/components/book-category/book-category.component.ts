import { BookCategory } from './../../common/book-category';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  categories : BookCategory[];
  constructor(private bookService :BookService) { }

  ngOnInit(): void {
    this.getBookCategory()
  }
getBookCategory (){
  this.bookService.getCategory().subscribe(res=>{
    console.log(res);
    this.categories=res
    
  })
}
}
