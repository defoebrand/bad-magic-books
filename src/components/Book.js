import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.bookID}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookID: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};
Book.defaultProps = {
  book: null,
};

export default Book;
