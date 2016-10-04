import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component {
  renderList() {
    return (
         this.props.books.books.map((book) => {
           return (
             <li
               key={ book.id }
               onClick={ () => this.props.selectBook(book) }
               className="list-group-item"
             > { book.name }
             </li>
           );
         }
     )
    );
  }

  render() {
    return (
      <ul className="col-md-12"> { this.renderList } </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.books);
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
