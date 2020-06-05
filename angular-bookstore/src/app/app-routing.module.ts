import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookDetails } from './common/book-details';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "books",
    component: BookListComponent
  },
  {
    path: "category/:id",
    component: BookListComponent
  },
  {
    path: "book/:id",
    component: BookDetailsComponent
  },
  {
    path: "search/:keyword",
    component: BookListComponent
  },
  {
    path: "",
    component: BookListComponent
    , pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

