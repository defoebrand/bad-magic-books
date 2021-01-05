export const CHANGE_FILTER = 'CHANGE_FILTER';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
