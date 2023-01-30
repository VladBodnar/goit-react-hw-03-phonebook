import React, { Component } from "react"
import { nanoid } from 'nanoid'
   
  class PhonebookForm extends Component {  
    state = {
      contacts: [],
      name: '',
      number: ''
    }

    handleAdd = e => {
      this.props.oNhandleSave(this.state)
    }
   
    handleChange = e => {
      const {name, value} = e.currentTarget;
      this.setState({[name]: value}
      );
      }
    render() {
      return ( <div>
        <label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
        onChange={this.handleChange}
          required
        />
        </label>        
        <label>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={this.state.number}
        onChange={this.handleChange}
        required
      />
        </label>
      <button type="button" onClick={this.handleAdd}>Add contact</button>
      </div> )
    }     
    
};

export default  PhonebookForm;

<label></label>