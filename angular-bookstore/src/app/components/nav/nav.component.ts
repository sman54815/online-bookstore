import { ActivatedRoute, Router } from '@angular/router';
import { BookCategory } from './../../common/book-category';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: BookCategory[];
  constructor(private bookService: BookService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBookCategory()
  }
  getBookCategory() {
    this.bookService.getCategory().subscribe(res => {
      console.log(res);
      this.categories = res

    })
  }
  searchBooks(keyword: string) {
    console.log(keyword);
    this.router.navigateByUrl(`/search/${keyword}`)
  }
}
