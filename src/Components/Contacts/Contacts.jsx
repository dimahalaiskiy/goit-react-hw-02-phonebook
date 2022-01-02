import React from 'react';
import { ContactList, ListItem } from './Contacts.styled';
import { Button } from '../PhoneBookField/PhonebookField.styled';
const Contacts = ({ contacts, filter, deleteContact }) => {
	let filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<ContactList>
			{filter
				? filteredContacts.map((contact) => {
						return (
							<ListItem key={contact.id}>
								{contact.name}: {contact.number}
								<Button onClick={() => deleteContact(contact)}>Delete</Button>
							</ListItem>
						);
				  })
				: contacts.map((contact) => {
						return (
							<ListItem key={contact.id}>
								{contact.name}: {contact.number}
								<Button onClick={() => deleteContact(contact)}>Delete</Button>
							</ListItem>
						);
				  })}
		</ContactList>
	);
};

export default Contacts;
