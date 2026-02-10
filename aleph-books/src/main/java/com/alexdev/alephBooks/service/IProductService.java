package com.alexdev.alephBooks.service;

import com.alexdev.alephBooks.dto.ProductDto;

import java.util.List;

public interface IProductService {
    List<ProductDto> getProducts();
}
