import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const formStyle = {
  borderTop: '2px solid #e8e8e8',
  marginTop: 50,
  paddingTop: 50,
  width: '80vw',
  margin: '50px auto 0',
};

const addStyle = {
  display: 'flex',
  flexDirection: 'column',
};

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      author: '',
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = event => {
    if (event.target.id === 'title') {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.id === 'author') {
      this.setState({
        author: event.target.value,
      });
    } else {
      this.setState({
        category: event.target.value,
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(createBook(this.state));
    this.setState({
      category: '',
      title: '',
      author: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { category, title, author } = this.state;
    return (
      <form style={formStyle}>
        <label htmlFor="title" style={addStyle}>ADD NEW BOOK</label>
        <input type="text" id="title" name="title" onChange={this.handleChange} value={title} placeholder="Book title" />
        <input type="text" id="author" name="author" onChange={this.handleChange} value={author} placeholder="Book author" />
        <select onChange={this.handleChange} value={category}>
          <option value="">Select a category:</option>
          {categories.map(value => (
            <option value={value} key={value}>{value}</option>))}
        </select>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

BooksForm.propTypes = {
  dispatch: PropTypes.func,
};

BooksForm.defaultProps = {
  dispatch: null,
};

export default connect(null)(BooksForm);
