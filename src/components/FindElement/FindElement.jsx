import { filter } from '../../redux/reducers';
import styles from './FindElement.module.css';
import { useSelector, useDispatch } from 'react-redux';

// import { filter } from 'redux/reducers';

export const FindElement = () => {
  const filterVal = useSelector(state => state.filter);
  const dispatch = useDispatch();
  // console.log(filter);

  const hendlFilter = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <div className={styles.findForm}>
      <label className={styles.findForm}>
        Find contacts by name
        <input
          className={styles.inputFind}
          type="text"
          name="filter"
          value={filterVal}
          onChange={hendlFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};
