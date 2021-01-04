export default function BooksList() {
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
        <tr key={value}>
          <td>{value.bookID}</td>
          <td>{value.title}</td>
          <td>{value.category}</td>
        </tr>
      ))}
    </table>
  );
}
