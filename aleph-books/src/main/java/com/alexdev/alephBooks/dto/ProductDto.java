package com.alexdev.alephBooks.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
public class ProductDto {

    private Long productId;
    private String name;
    private String description;
    private BigDecimal price;
    private String category;
    private Integer popularity;
    private String imageUrl;
    private Instant createdAt;
}
