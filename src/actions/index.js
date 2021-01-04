import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/books';

export const createBook = book => ({
  type: CREATE_BOOK,
  bookID: book.bookID,
  title: book.title,
  category: book.category,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  bookID: book.bookID,
  title: book.title,
  category: book.category,
});
