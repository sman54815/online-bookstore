package com.mikhail.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.mikhail.project.bookstore.entity.Book;
@CrossOrigin
public interface BookRepository  extends JpaRepository<Book, Long >{

}
