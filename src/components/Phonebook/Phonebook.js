import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import styles from "./Phonebook.module.css";
import "../../transition/title.css";

const formState = {
  name: "",
  number: "",
};

const Phonebook = ({ onHandlerSubmit }) => {
  const [form, setForm] = useState(formState);

  const handlerChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    onHandlerSubmit(contact);
    reset();
  };

  const reset = () => {
    setForm({ name: "", number: "" });
  };

  return (
    <form className={styles.PhonebookForm} onSubmit={handlerSubmit}>
      <CSSTransition in classNames="title" timeout={500} appear>
        <h2 className={styles.Title}>Phonebook</h2>
      </CSSTransition>

      <label htmlFor="name" className={styles.Label}>
        Name
        <input
          className={styles.PhonebookForm__input}
          type="text"
          name="name"
          value={form.name}
          onChange={handlerChange}
        />
      </label>

      <label htmlFor="number" className={styles.Label}>
        Number
        <input
          className={styles.PhonebookForm__input}
          type="text"
          name="number"
          value={form.number}
          onChange={handlerChange}
        />
      </label>

      <button className={styles.PhonebookForm__btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default Phonebook;
