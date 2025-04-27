import React, { useState } from 'react';

export default function ContactForm({ addContact }) {

  const [FullName, setFullName] = useState('');
  const [ContactEmail, setContactEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (FullName && ContactEmail) {
      addContact({FullName, ContactEmail});
      setFullName('');
      setContactEmail('');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={FullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      
      <input
        type="email"
        placeholder="Email"
        value={ContactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />
      <button type="submit">Add New Contact</button>
    </form>
  );
}
