import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;

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
          <Book key={value.title} book={value} />
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
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({ books: state.bookReducer });

export default connect(mapStateToProps, null)(BooksList);
