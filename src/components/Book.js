import PropTypes from 'prop-types';

const Book = ({ book, handleClick }) => (
  <tr>
    <td>{book.bookID}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={handleClick}>Remove Book</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookID: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};
Book.defaultProps = {
  book: null,
  handleClick: null,
};

export default Book;
