import React from 'react';
import SearchBar from './search_bar';
import BookForm from './book_form';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

class TabBody extends React.Component {

    render () {
        if(this.props.currentTab === 'list')
            return this.renderList();
        return this.renderPost();
    }

    renderList () {
        return (
            <div className="col-md-12">
                <SearchBar />
                <BookList />
                <BookDetail />
            </div>
        );
    }

    renderPost (){
         return (
             <div>
                <SearchBar />
                <br />
                <BookForm />
            </div>
        );     
    }
}

export default TabBody;