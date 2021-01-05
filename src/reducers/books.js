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
  let actionVariable = '';

  switch (action.type) {
    case CREATE_BOOK:
      actionVariable = [...state, action.book];
      break;
    case REMOVE_BOOK:
      actionVariable = (state.slice(0, state.findIndex(elem => (
        elem.title === action.book
      ))).concat(state.slice(state.findIndex(elem => (
        elem.title === action.book
      )) + 1, state.length)));
      break;
    default:
      if (localStorage.bookstore) {
        return JSON.parse(localStorage.bookstore);
      }
      return state.books;
  }
  localStorage.bookstore = JSON.stringify(actionVariable);
  return actionVariable;
};

export default bookReducer;
