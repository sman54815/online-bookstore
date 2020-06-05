import { BookCategory } from './../common/book-category';
import { Book } from './../common/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8080/api/v1/books"
  private CategoryUrl = 'http://localhost:8080/api/v1/book-category'
  constructor(private http: HttpClient) {

  }
  getBooks(): Observable<Book[]> {
    return this.http.get<GetResponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    )
  }
  getBooksByCategoryId(id: number): Observable<Book[]> {
    return this.http.get<GetResponseBooks>(`${this.baseUrl}/search/categoryid?id=${id}`).pipe(
      map(response => response._embedded.books)
    )
  }

  getBooksById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }
  getBooksByIdAndPage(id: number, size: number, page: number): Observable<GetResponseBooks[]> {
    return this.http.get<GetResponseBooks[]>(`${this.baseUrl}/search/categoryid?id=${id}&size=${size}&page=${page}`).pipe(
      map(response => response)

    )
  }
  getBooksByName(name: String, size: number, page: number): Observable<GetResponseBooks[]> {
    return this.http.get<GetResponseBooks[]>(`${this.baseUrl}/search/searchkeyword?name=${name}&size=${size}&page=${page}`).pipe(
      map(response => response)
    )
  }
  getCategory(): Observable<BookCategory[]> {
    return this.http.get<GetResponseCategory>(this.CategoryUrl).pipe(
      map(res => res._embedded.bookcategory)
    )
  }
}
interface GetResponseBooks {
  _embedded: {
    books: Book[]
  }
}

export interface GetResponseCategory {
  _embedded: {
    bookcategory: BookCategory[]
  },
  page: {
    size: string;
    totalElements: number;
    totalPages: number;
    number: number;
  }
}