import React from 'react';
import SearchBar from '../SearchBar/search_bar';
import BookForm from '../BookForm/book_form';
import BookList from '../BookList/book_list';
import BookDetail from '../BookDetail/book_detail';
import './main.css';

export default class TabBody extends React.Component {

  renderList() {
    return (
      <div className="col-md-12">
        <SearchBar />
        <br />
<<<<<<< HEAD
          <BookList className={ styles.list } />
          <BookDetail className={ styles.detail } />
=======
        <BookList className="List" />
        <BookDetail className="Detail" />
>>>>>>> 61388925caed6653fa488ff10f99a5d877d79367
      </div>
     );
  }

  renderPost() {
    return (
      <div className="col-md-12">
        <br />
        <BookForm />
      </div>
    );
  }

  render() {
    if (this.props.currentTab === 'list')
      return this.renderList();
    else if (this.props.currentTab === 'post')
      return this.renderPost();
    return this.renderLogin();
  }
}

TabBody.propTypes = {
  currentTab: React.PropTypes.string,
};
