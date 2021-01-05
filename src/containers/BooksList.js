import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = props => {
  const { books, filter } = props;

  const handleRemoveBook = ({ title }) => {
    const { dispatch } = props;
    dispatch(removeBook(title));
  };

  return (
    <>
      <table>
        <tbody>
          {books.filter(book => (
            filter === 'All'
              ? book
              : book.category === filter)).map(value => (
                <Book key={value.title} book={value} handleClick={handleRemoveBook} />))}
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
  dispatch: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  filter: '',
  dispatch: null,
};

export default connect(state => ({
  books: state.bookReducer,
  filter: state.filterReducer,
}))(BooksList);
