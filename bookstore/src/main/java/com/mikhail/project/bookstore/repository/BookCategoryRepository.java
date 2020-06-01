package com.mikhail.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.mikhail.project.bookstore.entity.BookCategory;
@RepositoryRestResource(collectionResourceRel = "bookcategory",path = "book-category")
@CrossOrigin
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}	
