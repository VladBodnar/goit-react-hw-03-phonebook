import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from "./Phonebook.module.css"

class PhonebookForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleAdd = e => {
    if (this.props.contacts.find(contact => contact.name === this.state.name) || this.state.name.length === 0) {
      alert(this.state.name + 'is alredy in contacts.');
    } else this.props.oNhandleSave(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    const contactId = nanoid();
    this.setState({ [name]: value, id: contactId });
  };
  render() {
    return (
      <div className={css.PhonebookContainer}>
        <label>
         
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required 
            className={css.nameInpput}
          />
        </label>
        <label>
         
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required 
            className={css.nameInpput}
          />
        </label>
        <button type="button" onClick={this.handleAdd}>
          Add contact
        </button>
      </div>
    );
  }
}

PhonebookForm.propTypes = {
  oNhandleSave: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.exact({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })),
}

export default PhonebookForm;
