import TabBody from './tab_body';
import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { currentTab: 'list' };
    }


    render() {
         return(
              <div> 
                <ul > 
                    <button onClick={() => this.setState({ currentTab: 'list'})}>Menu 1</button>
                    <button onClick={() => this.setState({ currentTab: 'post'})}>Menu 2</button>
                </ul>
                <TabBody currentTab={this.state.currentTab}/>
              </div>
        );
    }
}
