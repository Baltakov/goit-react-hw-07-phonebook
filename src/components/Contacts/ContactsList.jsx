import { ContactItem } from './ContactItem';
import styles from './Contacts.module.css';
import {selectVisibleContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';



export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts)


  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map(({ id, name, phone }) => {
         
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              
            />
          );
        })}
      </ul>
    </div>
  );
};
