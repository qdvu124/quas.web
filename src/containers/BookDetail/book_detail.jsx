import React from 'react';
import { connect } from 'react-redux';

function BookDetail(props) {
  if (!props.activeBook) {
    return <div className="col-md-6"> Book details will be displayed here </div>;
  }
  return (
    <div className="col-md-6 book-detail">
      <div>Book title: {props.activeBook.name}</div>
      <div>Edition: {props.activeBook.edition}</div>
      <div>Author: {props.activeBook.author}</div>
      <div>Publisher: {props.activeBook.publisher}</div>
    </div>);
}

function mapStateToProp({ activeBook }) {
  return {
    activeBook,
  };
}

BookDetail.propTypes = {
  activeBook: React.PropTypes.object,
};

export default connect(mapStateToProp)(BookDetail);
