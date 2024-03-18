import { useState } from 'react';

import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/thunks/thunks';
import { contactsSelector } from '../../redux/selectors';
import { nanoid } from 'nanoid';


export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const inContacts = contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );

    if (inContacts) {
      alert('is already in your phonebook');
      return;
    } else {
      dispatch(addContactThunk({ name, phone, id:nanoid() }));
      resetInput();
    }
  };

  const resetInput = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.inputIn}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.inputIn}>
        Number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btnAdd} type="submit">
        Add contacts
      </button>
    </form>
  );
};
