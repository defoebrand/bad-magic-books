import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';

import { changeFilter } from '../actions';

import '../styles/App.css';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#fff',
  marginBottom: 38,
  // padding: '23px 99px 27px 100px',
  borderBottom: '2px solid #e8e8e8',
};

const titleStyle = {
  whiteSpace: 'nowrap',
  // margin: '6px 47px 2px 0',
  marginLeft: 25,
  fontFamily: 'Montserrat',
  fontSize: 30,
  fontWeight: 'bold',
  color: '#0290ff',
};

const bookStyle = {
  // margin: '18px 41px 11px 0',
  marginLeft: 45,
  marginRight: 45,
  fontFamily: 'Montserrat',
  fontSize: 13,
  letterSpacing: 1.9,
  color: '#121212',
};

const App = ({ dispatch }) => {
  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h3 style={titleStyle}>Bookstore CMS</h3>
        <p style={bookStyle}>BOOKS</p>
        <CategoryFilter handleChange={handleFilterChange} />
      </header>
      <BooksList />
      <BooksForm />
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

App.defaultProps = {
  dispatch: null,
};

export default connect(null)(App);
