import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, filter, dispatch }) => {
  const handleRemoveBook = ({ title }) => {
    dispatch(removeBook(title));
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
      <table>
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
      category: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
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
