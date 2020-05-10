import React, { useState, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import Phonebook from "../Phonebook/Phonebook";
import ContactsFilter from "../ContactsFilter/ContactsFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "../../utils/storage";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import pop from "../../transition/pop.module.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const handleChangeFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  const addContact = (contact) => {
    const isExist = contacts.some(
      (savedContact) =>
        savedContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${contact.name} is already in contacts.`);
      return;
    }
    if (contact.name.length > 2 && contact.number.length > 5) {
      setContacts([...contacts, contact]);
    } else if (contact.name.length <= 2) {
      toast.warn("Small contact name!");
    } else if (contact.number.length <= 4) {
      toast.warn("Small contact number!");
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  //componentDidMount
  useEffect(() => {
    const savedContacts = storage.get("contacts");
    if (!savedContacts) {
      storage.save("contacts", []);
      setContacts([]);
      return;
    }
    setContacts(savedContacts);
  }, []);

  //componentDidUpdate
  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  return (
    <>
      <div className={styles.Container}>
        <Phonebook onHandlerSubmit={addContact} />
        <ToastContainer autoClose={3000} />
        {contacts.length >= 2 && (
          <CSSTransition timeout={250} classNames={pop}>
            <ContactsFilter
              filter={filter}
              onHandleChangeFilter={handleChangeFilter}
            />
          </CSSTransition>
        )}
        <Contacts
          filteredContacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
};

export default App;
