export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    {
      bookID: Math.floor(Math.random() * 10),
      title: 'To Kill a Mockingbird',
      category: 'Southern Gothic Fiction',
    }, {
      bookID: Math.floor(Math.random() * 10),
      title: 'Drawing Blood',
      category: 'Horror',
    }, {
      bookID: Math.floor(Math.random() * 10),
      title: 'War & Peace',
      category: 'Historical Novel',
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        books: state.books,
      };
    case REMOVE_BOOK:
      return {
        books: state.books,
      };
    default:
      return state.books;
  }
};
//
export default bookReducer;
