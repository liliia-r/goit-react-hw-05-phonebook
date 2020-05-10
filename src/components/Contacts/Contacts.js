import React from "react";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slide from "../../transition/slide.module.css";
import styles from "./Contacts.module.css";

const Contacts = ({ filteredContacts, onDeleteContact }) =>
  filteredContacts.length > 0 && (
    <TransitionGroup component="ul" className={styles.List}>
      {filteredContacts.map((contact) => (
        <CSSTransition
          timeout={250}
          unmountOnExit
          classNames={slide}
          key={contact.id}
        >
          <Contact
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
