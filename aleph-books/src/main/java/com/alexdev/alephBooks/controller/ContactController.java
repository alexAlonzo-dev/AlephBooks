package com.alexdev.alephBooks.controller;

import com.alexdev.alephBooks.dto.BookDto;
import com.alexdev.alephBooks.dto.ContactRequestDto;
import com.alexdev.alephBooks.service.IBookService;
import com.alexdev.alephBooks.service.IContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/contacts")
public class ContactController {
    private final IContactService iContactService;

    @Autowired
    public ContactController(IContactService iContactService) {
        this.iContactService = iContactService;
    }

    @PostMapping
    public String saveContact(@RequestBody ContactRequestDto contactRequestDto) {
        boolean isSaved = iContactService.saveContact(contactRequestDto);
        if(isSaved){
            return "Request processed succesfully";
        }else{
            return "An error ocurred";
        }
    }
}
