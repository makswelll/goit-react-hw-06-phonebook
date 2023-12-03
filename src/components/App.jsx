import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { addContact, deleteContact } from 'redux/contactSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('ContactsList', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleAddContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isNameExists) {
      alert(`Contact with name '${name}' already exists!`);
      return;
    }

    dispatch(addContact({ id: `id-${nanoid()}`, name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
      <GlobalStyle />
    </div>
  );
};
