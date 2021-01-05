import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = props => {
  const { books } = props;

  const handleClick = () => {
    const { removeBook } = props;
    removeBook();
    alert('hello');
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
          <Book key={value.title} book={value} handleClick={handleClick} />
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
  removeBook: PropTypes.func,

};

BooksList.defaultProps = {
  books: [],
  removeBook: null,

};

const mapStateToProps = state => ({ books: state.bookReducer });

const mapDispatchToProps = dispatch => ({
  removeBook: () => {
    dispatch(removeBook());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
