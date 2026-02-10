package com.alexdev.alephBooks.repository;

import com.alexdev.alephBooks.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
