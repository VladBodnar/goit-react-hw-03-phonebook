import React, { Component } from "react";
import PhonebookForm from "./Phonebook";

 class App extends Component {  
  state = {
    contacts: [],
    name: ''
  }

  handleSave = data => {   
    this.setState({...data}
      );  
    console.log(data.name, data.number , this.state );
    };

  render() {

    return (
      <PhonebookForm
      oNhandleSave = {this.handleSave}
      />
      
         )  
  }
    
};

export default App;
