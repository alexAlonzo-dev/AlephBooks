package com.alexdev.alephBooks.repository;

import com.alexdev.alephBooks.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
