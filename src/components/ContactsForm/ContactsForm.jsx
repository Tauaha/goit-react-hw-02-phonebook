import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


class ContactsForm extends Component {
      state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleInputNameChange=(e)=>{
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleOnSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.cleanInput();
  }

  cleanInput=()=> {
    this.setState({
      name: '',
      number: ''
    })
  }
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
            <input
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={this.state.name}
           onChange={this.handleInputNameChange}
         />
         <input
       type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       value={this.state.number}
           onChange={this.handleInputNameChange}
     />
         <button type='submit'>Add contacts</button>
            </form>
        )}}

ContactsForm.propTypes ={
   onSubmit: PropTypes.func.isRequired

}        

export default ContactsForm