import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="filter">
      <select onChange={handleChange}>
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
