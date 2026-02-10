package com.alexdev.alephBooks.controller;

import com.alexdev.alephBooks.dto.BookDto;
import com.alexdev.alephBooks.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
public class ProductController {
    private final IProductService iProductService;

    @Autowired
    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }

    @GetMapping
    public List<BookDto> getProducts() {
        return iProductService.getProducts();
    }
}
