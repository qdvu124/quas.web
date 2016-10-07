import React from 'react';
import { connect } from 'react-redux';

function BookDetail(props) {
  if (!props.activeBook) {
    return <div className="col-md-6"> Press the fetch button to begin </div>;
  }
  return (
    <div className="col-md-6">
      <div>Book title: {props.activeBook.name}</div>
      <div>Edition: {props.activeBook.edition}</div>
      <div>Author: {props.activeBook.author}</div>
      <div>Publisher: {props.activeBook.publisher}</div>
    </div>);
}

function mapStateToProp(state) {
  return {
    activeBook: state.activeBook,
  };
}

BookDetail.propTypes = {
  activeBook: React.PropTypes.object,
};

export default connect(mapStateToProp)(BookDetail);
