import { useState } from 'react';
import { FormButton, FormStyle } from './ContactFormStyled';

export const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contact;

    if (name === '' || number === '') {
      alert('Please enter both name and phone number for the contact.');
      return;
    }

    onAddContact(name, number);
    setContact({ name: '', number: '' });
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        required
        placeholder="Enter name"
      />
      <input
        type="text"
        name="number"
        value={contact.number}
        onChange={handleChange}
        required
        placeholder="Enter phone number"
      />
      <FormButton type="submit">Add contact</FormButton>
    </FormStyle>
  );
};
