import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {

    renderList(){
        return ( this.props.books.map(book => {
            return console.log(book);
         })
        );
    }

    render() {
        return(
            <div>
                { this.renderList() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books,
    };
}

export default connect(mapStateToProps)(BookList);