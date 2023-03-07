import React from 'react';
import PropTypes from "prop-types";
import css from "./ContactList.module.css"
const ContactList = ({ contactsArray, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contactsArray.map(({ id, name, number }) => (
      <li key={id} className={css.contactItem}>
        <span className={css.contactItemCild}>{name}</span>
        <span className={css.contactItemCild}>:</span>
        <span className={css.contactItemCild}>{number}</span>         
        <button onClick={() => onDeleteContact(id)} className={css.contactItemCild}>Delete</button>
      </li>
    ))}
  </ul>
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
}


export default ContactList;
