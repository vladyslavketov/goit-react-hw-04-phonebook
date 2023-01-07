import PropTypes from 'prop-types';
import css from '../ContactsItem/ContactsItem.module.css'

const ContactsItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <li key={id} className={css.contactsItem}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsItem;