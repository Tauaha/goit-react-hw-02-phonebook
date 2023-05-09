import React from 'react';
import PropTypes from 'prop-types';

const ContactList =({visibleContact, onDelete})=>{
return(
     <ul>
        {visibleContact.map(({id, name, number}) => (<li key={id}>
       {name}:<span>{number}</span> 
       <button onClick={()=>{onDelete(id)}}>Delete</button>
        </li> ))

        }
    </ul>
)
}

ContactList.propTypes ={
    visibleContact: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func.isRequired,
}
export default ContactList