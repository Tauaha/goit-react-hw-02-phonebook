import { Component } from 'react';
import React from 'react';
import { nanoid } from 'nanoid'

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './Filter/Filter';

export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

   formSubmitHandler =data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    const {contacts} = this.state;

  
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
      
    }
    ));
   
   }
  
 
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts=()=>{
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  }

  onDelete=(id)=>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    })); 

 }
  render() {
   const {filter} = this.state;
   const visibleContact = this.filterContacts();

    
    return (<div>
       <h1>Phonebook</h1>
  <ContactsForm onSubmit={this.formSubmitHandler}/>
       <h2>Contacts</h2>
  <ContactFilter value={filter}  onChange={this.changeFilter}/>
  <ContactList  visibleContact={visibleContact} onDelete={this.onDelete} />
    </div>
    
   )}}
