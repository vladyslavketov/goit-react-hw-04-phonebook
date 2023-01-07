import { Component } from "react";
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts:  [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));

    if (contactsFromLS) {
      this.setState({ contacts: contactsFromLS });
      console.log(contactsFromLS);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    const { contacts } = this.state;

     if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));    
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFiltredContacts();

    return (
      <div
        style={{
        padding: "12px 16px",
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={filter}/>
        <ContactsList onDeleteContact={this.deleteContact} contacts={filtredContacts}/>
      </div>
    );
  };
}

export default App;