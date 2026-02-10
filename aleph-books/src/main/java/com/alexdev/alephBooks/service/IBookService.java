package com.alexdev.alephBooks.service;

import com.alexdev.alephBooks.dto.BookDto;

import java.util.List;

public interface IBookService {
    List<BookDto> getBooks();
}
