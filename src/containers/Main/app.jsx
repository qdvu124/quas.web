import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TabBody from './tab_body';
import LoginForm from '../LoginForm/login_form';
import { dispatchLogout } from '../../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'list',
      showModal: false,
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication(event) {
    event.preventDefault();
    if (this.props.isAuthenticated) {
      this.props.dispatchLogout();
    } else {
      this.setState({ showModal: true });
    }
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <button className="btn btn-secondary" onClick={ () => this.setState({ currentTab: 'list' }) }>Search for books</button>
          <button className="btn btn-secondary" onClick={ () => this.setState({ currentTab: 'post' }) }>Post new books</button>
          <button className="btn btn-secondary" onClick={ this.handleAuthentication }>{ this.props.isAuthenticated ? 'Logout' : 'Login' }</button>
        </div>
        <br />
        <TabBody className="col-md-12" currentTab={ this.state.currentTab } />
        <div className="col-md-6">
          <br />
          <LoginForm showModal={ this.state.showModal } onCloseModal={ () => this.setState({ showModal: false }) } />
        </div>
      </div>
   );
  }
}

function mapStateToProps({ isAuthenticated }) {
  return {
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchLogout }, dispatch);
}

App.propTypes = {
  isAuthenticated: React.PropTypes.bool,
  dispatchLogout: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
