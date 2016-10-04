import React from 'react';
import { connect } from 'react-redux';
import { BOOK_API } from '../../constants/API';
import { post } from '../../util/rest';

require('isomorphic-fetch');

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      edition: '',
      author: '',
      publisher: '',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  postBody() {
    return {
      name: this.state.name,
      edition: this.state.edition,
      author: this.state.author,
      publisher: this.state.publisher,
    };
  }

  handleButtonClick() {
    post(BOOK_API, this.postBody());
  }

  render() {
    if (!this.props.isAuthenticated)
      alert('Log in first lah aiyo!');
    return (
      <div className="col-md-12">
        <form className="form-control">
          Name:
          <input
            className="form-control"
            onChange={ event => this.setState({ name: event.target.value }) }
          />
          <br />
          Edition:
          <input
            className="form-control"
            onChange={ event => this.setState({ edition: event.target.value }) }
          />
          <br />
          Author:
          <input
            className="form-control"
            onChange={ event => this.setState({ author: event.target.value }) }
          />
          <br />
          Publisher: <input
            className="form-control"
            onChange={ event => this.setState({ publisher: event.target.value }) }
          /> <br />
          <div>{this.state.name} </div>
          <div>{this.state.edition} </div>
          <div>{this.state.author} </div>
          <div>{this.state.publisher} </div>
          <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick } > Submit Book </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ isAuthenticated }) {
  return {
    isAuthenticated,
  };
}

BookForm.propTypes = {
  isAuthenticated: React.PropTypes.boolean,
};

export default connect(mapStateToProps)(BookForm);
