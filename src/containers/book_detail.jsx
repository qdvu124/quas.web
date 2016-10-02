import React from 'react';
import { connect } from 'react-redux';

function BookDetail(props) {
  return (<div> {props.activeBook ? props.activeBook.title : 'Select a book'} </div>);
}

function mapStateToProp(state) {
  return {
    activeBook: state.activeBook,
  };
}

export default connect(mapStateToProp)(BookDetail);
