package com.mikhail.project.bookstore.repository;

//import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

//import java.awt.print.Pageable;

//import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.mikhail.project.bookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	
	@RestResource(path = "categoryid")
	Page<Book> findByBookCategoryId(@Param("id") Long id, Pageable pageable);
	@RestResource(path = "searchkeyword")

	Page<Book> findByNameContaining(Pageable pageable, @Param("name") String name);

}
