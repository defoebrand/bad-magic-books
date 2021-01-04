import Book from '../components/Book';

const BooksList = () => {
  // const { bookID, title, category } = props;
  const books = [
    {
      bookID: 0,
      title: 'To Kill a Mockingbird',
      category: 'Southern Gothic Fiction',
    }, {
      bookID: 1,
      title: 'Drawing Blood',
      category: 'Horror',
    },
  ];
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map(value => (
        <Book key={value} book={value} />
      ))}
    </table>
  );
};

export default BooksList;
