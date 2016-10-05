import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dispatchLogin, dispatchLogout } from '../../actions/index';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.dispatchLogin(this.state.name, this.state.password);
    this.setState({
      name: '',
      password: '',
    });
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatchLogout();
  }

  render() {
    if (this.props.isAuthenticated)
      return (
        <div>
          <button type="submit" className="btn btn-secondary" onClick={ this.handleLogout }> Logout </button>
        </div>
      );
    return (
      <form>
        <input placeholder="Enter your username" className="form-control" onChange={ event => this.setState({ name: event.target.value }) } />
        <br />
        <input placeholder="Enter your password" className="form-control" onChange={ event => this.setState({ password: event.target.value }) } />
        <br />
        <button className="btn btn-primary" onClick={ this.handleLogin }> Login </button>
        <div> { this.state.name } </div>
        <div> { this.state.password } </div>
      </form>
    );
  }
}

function mapStateToProps({ isAuthenticated }) {
  return {
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchLogin, dispatchLogout }, dispatch);
}

LoginForm.propTypes = {
  dispatchLogin: React.PropTypes.func,
  dispatchLogout: React.PropTypes.func,
  isAuthenticated: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
