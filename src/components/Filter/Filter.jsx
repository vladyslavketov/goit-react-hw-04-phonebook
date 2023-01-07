import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter}>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;