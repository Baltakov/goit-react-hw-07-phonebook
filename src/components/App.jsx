import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../components/Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { FindElement } from './FindElement/FindElement';
import { useEffect } from 'react';
import { getContactsThunk } from '../redux/thunks/thunks';
import { contactsSelector } from '../redux/selectors';
import styles from '../components/Contacts/Contacts.module.css';

export const App = () => {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <FindElement />
      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <h3 className={styles.title}>
          Your phone book is empty, please add your first phone number
        </h3>
      )}
    </div>
  );
};
