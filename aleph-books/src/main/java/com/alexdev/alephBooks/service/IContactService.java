package com.alexdev.alephBooks.service;

import com.alexdev.alephBooks.dto.BookDto;
import com.alexdev.alephBooks.dto.ContactRequestDto;

import java.util.List;

public interface IContactService {
    boolean saveContact(ContactRequestDto contactRequestDto);
}
