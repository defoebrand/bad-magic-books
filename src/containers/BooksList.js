import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = props => {
  const { books } = props;

  const handleRemoveBook = ({ title }) => {
    const { dispatch } = props;
    dispatch(removeBook(title));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(value => (
          <Book key={value.title} book={value} handleClick={handleRemoveBook} />
        ))}
      </tbody>
    </table>
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
  dispatch: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  dispatch: null,
};

export default connect(state => ({ books: state.bookReducer }))(BooksList);
