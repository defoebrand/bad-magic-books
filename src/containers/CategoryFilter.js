import React from 'react';
import PropTypes from 'prop-types';

const catStyle = {
  height: 16,
  opacity: 0.5,
  fontFamily: 'Montserrat',
  fontSize: 13,
  letterSpacing: 1.9,
  color: '#121212',
  border: 'none',
  backgroundColor: 'inherit',
  WebkitAppearance: 'none',
};

const CategoryFilter = ({ handleChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="filter">
      <select onChange={handleChange} style={catStyle}>
        <option value="" key="0">CATEGORIES</option>
        {categories.map(value => (
          <option value={value} key={value}>{value}</option>))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
