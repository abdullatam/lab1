import React from 'react';

export default function ContactItem({ FullName, ContactEmail, index, deleteContact }) {
  return (
    <li className="SingleList">
      <p>{index + 1}</p>
      <p>{FullName} - {ContactEmail}</p>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </li>
  );
}
