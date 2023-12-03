import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ContactListItem,
  DeleteBtnContact,
  ContactsList,
} from './ContactListStyled';
import { deleteContact } from 'redux/contactSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name} - {contact.number}
          <DeleteBtnContact
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteBtnContact>
        </ContactListItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
