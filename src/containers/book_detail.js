import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    render () {
        return (
            <div> {this.props.activeBook ? this.props.activeBook.title : 'Select a book'} </div>
        );
    }
}

function mapStateToProp(state) {
    return {
        activeBook : state.activeBook,
    }
}

export default connect(mapStateToProp)(BookDetail);