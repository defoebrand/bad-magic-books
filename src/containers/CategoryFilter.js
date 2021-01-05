import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { handleChange } = props;

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
  handleChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleChange: null,
};

export default CategoryFilter;
