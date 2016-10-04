import React from 'react';
import * as api from '../constants/API';
import { post } from '../util/rest';

require('isomorphic-fetch');

export default class BookForm extends React.Component {
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
    post(api.API, this.postBody());
  }

  render() {
    return (
      <div className="form">
        <form>
          Name:
          <input onChange={ event => this.setState({ name: event.target.value }) } />
          <br />
          Edition:
          <input
            onChange={ event => this.setState({ edition: event.target.value }) }
          />
          <br />
          Author:
          <input
            onChange={ event => this.setState({ author: event.target.value }) }
          />
          <br />
          Publisher: <input
            onChange={ event => this.setState({ publisher: event.target.value }) }
          /> <br />
          <div>{this.state.name} </div>
          <div>{this.state.edition} </div>
          <div>{this.state.author} </div>
          <div>{this.state.publisher} </div>
          <button type="button" onClick={ this.handleButtonClick } > Button Here </button>
        </form>
      </div>
    );
  }
}
