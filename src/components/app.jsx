import React from 'react';
import TabBody from './tab_body';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: 'list' };
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <button onClick={ () => this.setState({ currentTab: 'list' }) }>Search for books</button>
          <button onClick={ () => this.setState({ currentTab: 'post' }) }>Post new books</button>
          <button onClick={ () => this.setState({ currentTab: 'login' }) }>Login</button>
        </div>
        <br />
        <TabBody className="col-md-12" currentTab={ this.state.currentTab } />
      </div>
   );
  }
}
