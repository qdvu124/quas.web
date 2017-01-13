import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal } from 'react-bootstrap';
import { dispatchLogin, dispatchRegister } from '../../actions/index';

const modalStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px"
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.onCloseModal();
    this.props.dispatchLogin(this.state.name, this.state.password);
    this.setState({
      name: '',
      password: '',
    });
  }

  handleRegister(event) {
    event.preventDefault();
    this.props.onCloseModal();
    this.props.dispatchRegister(this.state.name, this.state.password);
    this.setState({
      name: '',
      password: '',
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Modal show={ this.props.showModal } onHide={ this.props.onCloseModal } animation={ false }>
          <Modal.Header closeButton>
            <Modal.Title style={ modalStyle }> Logout </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <button type="submit" className="btn btn-secondary" onClick={ this.handleLogout }> Logout </button>
          </Modal.Body>
        </Modal>
      );
    }
    return (
      <Modal show={ this.props.showModal } onHide={ this.props.onCloseModal } animation={ false } >
        <Modal.Header closeButton>
          <Modal.Title style={ modalStyle }> Login </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <span className="fa fa-spinner fa-spin" />
            <input placeholder="Enter your username" className="form-control" onChange={ event => this.setState({ name: event.target.value }) } />
            <br />
            <input type="password" placeholder="Enter your password" className="form-control" onChange={ event => this.setState({ password: event.target.value }) } />
            <br />
            <button className="btn btn-primary" onClick={ this.handleLogin }> Login </button>
            <button className="btn btn-primary" onClick={ this.handleRegister }> Register </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

function mapStateToProps({ isAuthenticated }) {
  return {
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchLogin, dispatchRegister }, dispatch);
}

LoginForm.propTypes = {
  dispatchLogin: React.PropTypes.func,
  dispatchRegister: React.PropTypes.func,
  isAuthenticated: React.PropTypes.bool,
  onCloseModal: React.PropTypes.func,
  showModal: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
