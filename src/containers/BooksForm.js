import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = event => {
    if (event.target.id === 'title') {
      this.setState({
        title: event.target.value,
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
      title: '',
      category: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Book Title:
          <input type="text" id="title" name="title" onChange={this.handleChange} value={title} />
        </label>
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
