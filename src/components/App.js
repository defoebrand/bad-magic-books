import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';

import { changeFilter } from '../actions';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  marginBottom: 38,
  borderBottom: '2px solid #e8e8e8',
};

const headerLeftStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const iconStyle = {
  color: '#0290ff',
  border: '2px solid #e8e8e8',
  borderRadius: 50,
  padding: '15px 18px',
  fontSize: 25,
  marginRight: 100,
};

const titleStyle = {
  whiteSpace: 'nowrap',
  marginLeft: 100,
  fontFamily: 'Montserrat',
  fontSize: 30,
  fontWeight: 'bold',
  color: '#0290ff',
};

const bookStyle = {
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
        <div style={headerLeftStyle}>
          <h3 style={titleStyle}>Bookstore CMS</h3>
          <p style={bookStyle}>BOOKS</p>
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
        <i className="fa fa-user" style={iconStyle} />
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
