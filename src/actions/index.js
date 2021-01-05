import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/books';
import { CHANGE_FILTER } from '../reducers/filter';

export const createBook = book => ({
  type: CREATE_BOOK,
  book: {
    bookID: Math.floor(Math.random() * 10),
    title: book.title,
    category: book.category,
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
