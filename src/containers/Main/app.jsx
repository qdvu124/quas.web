import React from 'react';
import { connect } from 'react-redux';
import TabBody from './tab_body';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'list',
      showModal: true,
    };

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <button className="btn btn-secondary" onClick={ () => this.setState({ currentTab: 'list', showModal: false }) }>Search for books</button>
          <button className="btn btn-secondary" onClick={ () => this.setState({ currentTab: 'post', showModal: false }) }>Post new books</button>
          <button className="btn btn-secondary" onClick={ () => this.setState({ currentTab: 'login', showModal: true }) }>{this.props.isAuthenticated ? 'Logout' : 'Login'}</button>
        </div>
        <br />
        <TabBody className="col-md-12" currentTab={ this.state.currentTab } showModal={ this.state.showModal } onCloseModal={ this.onCloseModal } />
      </div>
   );
  }
}

function mapStateToProps({ isAuthenticated }) {
  return {
    isAuthenticated,
  };
}

App.propTypes = {
  isAuthenticated: React.PropTypes.bool,
};

export default connect(mapStateToProps)(App);
