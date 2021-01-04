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

export default BooksList;
