package com.alexdev.alephBooks.service.impl;

import com.alexdev.alephBooks.dto.ContactRequestDto;
import com.alexdev.alephBooks.entity.Contact;
import com.alexdev.alephBooks.repository.ContactRepository;
import com.alexdev.alephBooks.service.IContactService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ContactServiceImpl implements IContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public boolean saveContact(ContactRequestDto contactRequestDto) {
        try{
            Contact contact = transformToContact(contactRequestDto);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactRequestDto.getName());
            contactRepository.save(contact);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Contact transformToContact(ContactRequestDto contactRequestDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactRequestDto, contact);
        return contact;
    }

}
