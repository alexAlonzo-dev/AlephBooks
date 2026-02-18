package com.alexdev.alephBooks.repository;

import com.alexdev.alephBooks.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}
