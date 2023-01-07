import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';
import css from '../ContactsList/ContactsList.module.css'


const ContactsList = ({contacts, onDeleteContact}) => {
  return (
    <>
      <ul className={css.contactsList}>
        {contacts.map(({id, name, number}) => (
          <ContactsItem
            key={id}
            contact={{ id, name, number }}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;