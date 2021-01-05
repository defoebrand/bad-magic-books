import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
