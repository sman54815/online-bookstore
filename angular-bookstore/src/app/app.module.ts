import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStausComponent } from './components/cart-staus/cart-staus.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavComponent,
    FooterComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStausComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, NgxPaginationModule,NgbPaginationModule, NgbAlertModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
