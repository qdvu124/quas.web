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
               key={ book._id }
               onClick={ () => this.props.selectBook(book) }
               className="list-group-item"
             > { book.name ? book.name : 'No name' }
             </li>
           );
         }
     )
    );
  }

  render() {
    return (
      <ul className="col-md-12"> { this.props.books ? this.renderList() : 'Now loading'} </ul>
    );
  }
}

function mapStateToProps(state) {
  // TODO: Investigate why
  return {
    books: state.books.books,
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
