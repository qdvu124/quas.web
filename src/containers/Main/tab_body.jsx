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
          <BookList />
          <BookDetail />
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