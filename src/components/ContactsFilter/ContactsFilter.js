import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactFilter.module.css";

const ContactsFilter = ({ filter, onHandleChangeFilter }) => {
  return (
    <div className={styles.Container}>
      <label htmlFor="filter" className={styles.Label}>
        Find contacts by name
        <input
          className={styles.PhonebookForm__filter}
          type="text"
          id={filter}
          name="filter"
          value={filter}
          onChange={onHandleChangeFilter}
        />
      </label>
    </div>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string,
  onHandleChangeFilter: PropTypes.func.isRequired,
};

export default ContactsFilter;
