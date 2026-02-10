package com.alexdev.alephBooks.service.impl;

import com.alexdev.alephBooks.dto.ProductDto;
import com.alexdev.alephBooks.entity.Book;
import com.alexdev.alephBooks.repository.BookRepository;
import com.alexdev.alephBooks.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService {
    private final BookRepository productRepository;

    @Autowired
    public ProductServiceImpl(BookRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductDto> getProducts() {
        return productRepository.findAll().stream().map(this::transformToDTO).collect(Collectors.toList());
    }

    private ProductDto transformToDTO(Book product) {
        ProductDto productDto = new ProductDto();
        BeanUtils.copyProperties(product, productDto);
        return productDto;
    }
}
