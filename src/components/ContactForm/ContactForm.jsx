import { useState } from "react";
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css'

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange (e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    };
  };

  function handleSubmit (e) {
    e.preventDefault();

    onSubmit(name, number);
    reset();
  };

  function reset () {
    setName('');
    setNumber('');
  };

  return (
      <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
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
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
    )
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// ========================================
// до рефакторингу
// ========================================

// class ContactFrom extends Component { 
//   state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     const { onSubmit } = this.props;

//     onSubmit(name, number);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
    
//     return (
//       <>
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     </>
//     )
//   };
// }

// export default ContactFrom;