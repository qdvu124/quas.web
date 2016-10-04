import React from 'react';
import SearchBar from '../containers/SearchBar/search_bar';
import BookForm from '../containers/BookForm/book_form';
import BookList from '../containers/BookList/book_list';
import LoginForm from '../containers/LoginForm/login_form';
import BookDetail from '../containers/BookDetail/book_detail';

export default class TabBody extends React.Component {
  renderList() {
    return (
      <div className="col-md-12">
        <SearchBar />
        <br />
        <BookList className="col-md-12" />
        <br />
        <BookDetail className="col-md-12" />
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

  renderLogin() {
    return (
      <div className="col-md-6">
        <br />
        <LoginForm />
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
