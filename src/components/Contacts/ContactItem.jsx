import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/thunks/thunks';

export const ContactItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
   
    const handleDelete = id => {
 
    dispatch(deleteContactThunk(id));
    

  };
  return (
    <li className={styles.item}>
      {name} : {phone}
      <button
        className={styles.btnDel}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
