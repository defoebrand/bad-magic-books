import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { createBook, removeBook } from '../actions';

const BooksList = ({ books, filter, dispatch }) => {
  const handleRemoveBook = ({ title }) => {
    dispatch(removeBook(title));
  };

  useEffect(() => {
    fetch('https://serene-citadel-11754.herokuapp.com/').then(response => response.json()).then(data => {
      data.forEach(book => {
        dispatch(createBook(book));
      });
    }).catch(err => (err));
  }, []);

  let filteredBooks = '';

  if (filter === 'All' || filter === '') {
    filteredBooks = books.map(value => (
      <Book key={value.title} book={value} handleClick={handleRemoveBook} />));
  } else {
    filteredBooks = books.filter(book => (book.category === filter)).map(value => (
      <Book key={value.title} book={value} handleClick={handleRemoveBook} />));
  }

  return (
    <>
      { filteredBooks }
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
