import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/books';
import { CHANGE_FILTER } from '../reducers/filter';

export const createBook = book => ({
  type: CREATE_BOOK,
  book: {
    category: book.category,
    title: book.title,
    author: book.author,
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
