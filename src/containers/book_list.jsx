import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component {
  renderList() {
    return (
         this.props.books.map((book) => {
           return (
             <li
               key={ book.title }
               onClick={ () => this.props.selectBook(book) }
               className="list-group-item"
             > {book.title}
             </li>
           );
         }
     )
    );
  }

  render() {
    return (
      <ul> { this.renderList() } </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

BookList.propTypes = {
  books: React.PropTypes.array,
  selectBook: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
