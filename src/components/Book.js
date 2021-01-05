import PropTypes from 'prop-types';

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '80vw',
  margin: '37px 100px 0',
  padding: '32px 147px 26px 27px',
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',
};

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const catStyle = {
  margin: '0 39px 0 0',
  opacity: 0.5,
  fontFamily: 'Montserrat',
  fontSize: 14,
  fontWeight: 'bold',
  color: '#121212',
};

const titleStyle = {
  margin: '7px 323px 0 0',
  fontFamily: 'RobotoSlab',
  fontSize: 22,
  fontWeight: 'bold',
  letterSpacing: -0.2,
  color: '#121212',
};

const linksDiv = {
  display: 'flex',
  alignItems: 'center',
};

const linkStyle = {
  height: 19,
  margin: '3px 15px 2px 0',
  fontFamily: 'RobotoSlab',
  fontSize: 14,
  fontWeight: 300,
  color: '#4386bf',
  backgroundColor: 'inherit',
  border: 'none',
};

const removeStyle = { ...linkStyle };

removeStyle.borderLeft = '2px solid #e8e8e8';
removeStyle.borderRight = '2px solid #e8e8e8';

const buttonStyle = {
  backgroundColor: '#0290ff',
  border: 'none',
  width: 184,
  height: 33,
  margin: '12px 0 9px 59px',
  padding: '7px 19px 8px 22px',
  borderRadius: 3,
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 300,
  letterSpacing: 0.5,
  textAlign: 'center',
  color: '#fff',
};

const Book = ({ book, handleClick }) => (
  <div style={rowStyle}>
    <div style={divStyle}>
      <p style={catStyle}>{book.category}</p>
      <p style={titleStyle}>{book.title}</p>
      <p style={linkStyle}>{book.author}</p>
      <div style={linksDiv}>
        <p style={linkStyle}>Comment</p>
        <p><button type="button" onClick={() => { handleClick(book); }} style={removeStyle}>Remove</button></p>
        <p style={linkStyle}>Edit</p>
      </div>
    </div>
    <button type="button" style={buttonStyle}>hello!</button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};
Book.defaultProps = {
  book: null,
  handleClick: null,
};

export default Book;
