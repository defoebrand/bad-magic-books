import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const formStyle = {
  borderTop: '2px solid #e8e8e8',
  paddingTop: 15,
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  padding: 0,
  width: '83vw',
  marginBottom: 50,
  fontFamily: 'Montserrat',
  fontSize: 20,
  fontWeight: 'bold',
  letterSpacing: -0.18,
  color: '#888888',

};

const inputDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 15,
};

const inputField = {
  marginRight: 15,
  marginBottom: 15,
  width: '33%',
  padding: '13px 0 13px 17px',
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',

  fontFamily: 'Montserrat',
  fontSize: 16,
  letterSpacing: -0.15,
  color: '#c4c4c4',

};

const selectBox = {
  marginRight: 15,
  marginBottom: 15,
  width: '45%',
  padding: '10px 15px 10px 10px',
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',
  WebkitAppearance: 'none',
  fontFamily: 'Montserrat',
  fontSize: 16,
  letterSpacing: -0.15,
  color: '#c4c4c4',
};

const submitBtn = {
  marginRight: 15,
  marginBottom: 15,
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 'bold',
  letterSpacing: 0.5,
  textAlign: 'center',
  color: '#fff',
  border: 'none',
  width: 184,
  height: 38,
  borderRadius: 3,
  backgroundColor: '#0290ff',

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
        <fieldset style={fieldStyle}>
          <p style={{ margin: '5px 0' }}>ADD NEW BOOK</p>
          <div style={inputDivStyle}>
            <input type="text" id="title" name="title" onChange={this.handleChange} value={title} placeholder="Book title" style={inputField} />
            <input type="text" id="author" name="author" onChange={this.handleChange} value={author} placeholder="Book author" style={inputField} />
            <div>
              <select onChange={this.handleChange} value={category} style={selectBox}>
                <option value="">Select a category:</option>
                {categories.map(value => (
                  <option value={value} key={value}>{value}</option>))}
              </select>
              <input type="submit" value="Add Book" onClick={this.handleSubmit} style={submitBtn} />
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(BooksForm);
