import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        
        <ContactItem
          key={index}
          index={index}
          FullName={contact.FullName}
          ContactEmail={contact.ContactEmail}
          deleteContact={deleteContact}
          
        />
      ))}
    </ul>
  );
}
