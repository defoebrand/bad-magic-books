export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    {
      category: 'Southern Gothic Fiction',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    }, {
      category: 'Horror',
      title: 'Drawing Blood',
      author: 'Poppy Z. Brite',
    }, {
      category: 'History',
      title: 'War & Peace',
      author: 'Leo Tolstoy',
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
      localStorage.bookstore = JSON.stringify(state.books);
      return state.books;
  }
  localStorage.bookstore = JSON.stringify(actionVariable);
  return actionVariable;
};

export default bookReducer;
