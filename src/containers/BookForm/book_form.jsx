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
      return <div> Authentication is required for posting new book </div>;
    return (
      <div className="col-md-12">
        <form>
          Name:
          <input
            className="form-control"
            onChange={ event => this.setState({ name: event.target.value }) }
          />
          <div className="error"> { this.props.errors.errorBookname } </div>
          <br />
          Edition:
          <input
            className="form-control"
            onChange={ event => this.setState({ edition: event.target.value }) }
          />
          <div className="error"> { this.props.errors.errorEdition } </div>
          <br />
          Author:
          <input
            className="form-control"
            onChange={ event => this.setState({ author: event.target.value }) }
          />
          <div classname="error"> { this.props.errors.errorAuthor } </div>
          <br />
          Publisher: <input
            className="form-control"
            onChange={ event => this.setState({ publisher: event.target.value }) }
          />
          <div classname="error"> { this.props.errors.errorPublisher} </div>
          <br />
          <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick } > Submit Book </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ errors, isAuthenticated }) {
  return {
    errors,
    isAuthenticated,
  };
}

BookForm.propTypes = {
  errors: React.PropTypes.object,
  isAuthenticated: React.PropTypes.bool,
};

export default connect(mapStateToProps)(BookForm);
