import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../styles/App.css';

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingLeft: 50,
};

const pStyle = {
  margin: '0 15px',
};

const App = () => (
  <div className="App">
    <header style={style}>
      <h3>Bookstore CMS</h3>
      <p style={pStyle}>BOOKS</p>
      <p>CATEGORIES</p>
    </header>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
