import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TabBody from './tab_body';
import LoginForm from '../LoginForm/login_form';
import { logout } from '../../actions/auth_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'list',
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleAuthentication(event) {
    event.preventDefault();
    if (this.props.isAuthenticated) {
      this.props.logout();
    } else {
      this.props.openModal();
    }
  }

  handleCloseModal() {
    this.props.closeModal();
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
          <LoginForm
            showModal={ this.props.showModal }
            onCloseModal={ this.handleCloseModal }
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ isAuthenticated, showModal }) {
  return {
    isAuthenticated,
    showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout, openModal, closeModal }, dispatch);
}

App.propTypes = {
  isAuthenticated: React.PropTypes.bool,
  showModal: React.PropTypes.bool,
  logout: React.PropTypes.func,
  openModal: React.PropTypes.func,
  closeModal: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
