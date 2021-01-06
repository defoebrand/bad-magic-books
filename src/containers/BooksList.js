import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, filter, dispatch }) => {
  const handleRemoveBook = ({ title }) => {
    dispatch(removeBook(title));
  };

  useEffect(() => {
    // fetch('https://serene-citadel-11754.herokuapp.com/', { mode: 'cors' })
    fetch('https://localhost:3000', { mode: 'cors' })
      .then(response => {
        console.log(response);
        //   return response.json();
        // }).then(data => {
        //   console.log(data)
      }).catch(err => {
        console.error(err);
      });
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
