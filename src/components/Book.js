import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '80vw',
  minWidth: 'max-content',
  marginBottom: 35,
  padding: '32px 25px 25px 25px',
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
  margin: '5px 0',
  fontFamily: 'RobotoSlab',
  fontSize: 22,
  fontWeight: 'bold',
  letterSpacing: -0.2,
  color: '#121212',
  whiteSpace: 'nowrap',
};

const linksDiv = {
  display: 'flex',
  alignItems: 'center',
};

const linkStyle = {
  height: 19,
  margin: 5,
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
  borderRadius: 3,
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 300,
  letterSpacing: 0.5,
  textAlign: 'center',
  color: '#fff',
};

const progressStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: 100,
};

const progressTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: 50,
};
const percentStyle = {
  width: 68,
  height: 39,
  margin: '1px 92px 0 11px',
  fontFamily: 'Montserrat',
  fontSize: 32,
  color: '#121212',
};

const completeStyle = {
  width: 80,
  height: 18,
  margin: '7px 79px 12px 12px',
  opacity: 0.5,
  fontFamily: 'Montserrat',
  fontSize: 14,

  color: '#121212',
};

const circularStyle = {
  width: 68,
  height: 68,
};

const chapterStyle = {
  borderLeft: '2px solid #e8e8e8',
  paddingLeft: 50,
  width: 125,
  margin: '0 125px 0 50px',
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 300,
  whiteSpace: 'nowrap',
  color: 'rgb(18, 18, 18, 0.5)',
};

const chapterTitleStyle = {
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 300,
  letterSpacing: -0.4,
  color: '#121212',
};

const percent = 5;

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
    <div style={progressStyle}>
      <div style={circularStyle}>
        <CircularProgressbar value={percent} className="circular" />
      </div>
      <div style={progressTextStyle} className="circularProgress">
        <p style={percentStyle}>
          {percent}
          %
        </p>
        <p style={completeStyle}>
          Completed
        </p>
      </div>
    </div>
    <div style={chapterStyle}>
      <p>CURRENT CHAPTER</p>
      <p style={chapterTitleStyle}>INTRODUCTION</p>
      <button type="button" style={buttonStyle}>UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
};
Book.defaultProps = {
  book: [],
};

export default Book;
