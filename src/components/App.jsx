import React, { Component } from 'react';
import PhonebookForm from './Phonebook';
import ContactList from './ContactList';
import css from './App.module.css';
import Filter from './Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
        <PhonebookForm oNhandleSave={this.handleSave} 
        contacts={contacts} />

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
