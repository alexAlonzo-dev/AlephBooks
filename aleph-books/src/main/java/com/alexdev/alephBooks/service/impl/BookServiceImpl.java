package com.alexdev.alephBooks.service.impl;

import com.alexdev.alephBooks.dto.BookDto;
import com.alexdev.alephBooks.entity.Book;
import com.alexdev.alephBooks.repository.BookRepository;
import com.alexdev.alephBooks.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements IBookService {
    private final BookRepository productRepository;

    @Autowired
    public BookServiceImpl(BookRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<BookDto> getBooks() {
        return productRepository.findAll().stream().map(this::transformToDTO).collect(Collectors.toList());
    }

    private BookDto transformToDTO(Book book) {
        BookDto productDto = new BookDto();
        BeanUtils.copyProperties(book, productDto);
        return productDto;
    }
}
