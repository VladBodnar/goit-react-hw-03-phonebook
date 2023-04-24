import React, { Component } from 'react';
import PhonebookForm from '../Phonebook/Phonebook';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import Filter from '../Filter/Filter';
import contactsJson from './../../dataBase/contactes.json';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts =
      JSON.parse(localStorage.getItem('contacts')) || contactsJson;
    this.setState({ contacts });
  }

  componentDidUpdate(prevPros, prevState) {
    if (
      
      prevState.contacts !== this.state.contacts
    ) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSave = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1 className={css.componentsName}>Phonebook</h1>
        <PhonebookForm oNhandleSave={this.handleSave} contacts={contacts} />

        <h2 className={css.componentsName}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contactsArray={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

// prevState.contacts.length !== 0 &&