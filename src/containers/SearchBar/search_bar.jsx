import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { retrieveBooks } from '../../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="input-group">
        <input
          value={ this.state.term }
          onChange={ this.onInputChange }
          placeholder="Enter your search here"
          className="form-control"
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={ this.props.retrieveBooks }
          >Fetch!</button>
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ retrieveBooks }, dispatch);
}

SearchBar.propTypes = {
  retrieveBooks: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SearchBar);
