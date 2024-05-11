// import css from "./App.module.css";
import initialContacts from "../../contacts.json";
// import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([initialContacts]);
  const [searchBox, setSearchBox] = useState("");

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm onAdd={addContact} /> */}
      <SearchBox value={searchBox} onFilter={setSearchBox} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
