import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from './CategoryFilter';

const BooksList = ({ books, filter, dispatch }) => {
  const handleRemoveBook = ({ title }) => {
    dispatch(removeBook(title));
  };

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  let filteredBooks = '';

  if (filter === 'All') {
    filteredBooks = books.map(value => (
      <Book key={value.title} book={value} handleClick={handleRemoveBook} />));
  } else {
    filteredBooks = books.filter(book => (book.category === filter)).map(value => (
      <Book key={value.title} book={value} handleClick={handleRemoveBook} />));
  }

  return (
    <>
      <CategoryFilter handleChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookID: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
  filter: '',
};

export default connect(state => ({
  books: state.bookReducer,
  filter: state.filterReducer,
}))(BooksList);
