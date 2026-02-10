package com.alexdev.alephBooks.controller;

import com.alexdev.alephBooks.dto.BookDto;
import com.alexdev.alephBooks.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/books")
public class BookController {
    private final IBookService iBookService;

    @Autowired
    public BookController(IBookService iBookService) {
        this.iBookService = iBookService;
    }

    @GetMapping
    public List<BookDto> getBooks() {
        return iBookService.getBooks();
    }
}
