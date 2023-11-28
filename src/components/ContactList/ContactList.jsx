import {
  ContactListItem,
  DeleteBtnContact,
  ContactsList,
} from './ContactListStyled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(contact => (
      <ContactListItem key={contact.id}>
        {contact.name} - {contact.number}
        <DeleteBtnContact
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </DeleteBtnContact>
      </ContactListItem>
    ))}
  </ContactsList>
);
