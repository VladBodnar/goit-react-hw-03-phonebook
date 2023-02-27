import React from 'react';
const ContactList = ({ contactsArray, onDeleteContact }) => (
  <ul>
    {contactsArray.map(({ id, name, number }) => (
      <li key={id}>
        {name} : {number}{' '}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
