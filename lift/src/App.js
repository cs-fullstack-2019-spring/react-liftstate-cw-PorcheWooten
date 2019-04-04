import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './Players'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            lastClicked:''
        }
    }
    getLastClicked=(player)=>{
        this.setState({lastClicked:player})

};
  render() {
    return (
      <div className="App">
          <h1>Last Clicked Player {this.state.lastClicked}</h1>
        <Players player={1} getLastClicked={this.getLastClicked}/>
        <Players player={2} getLastClicked={this.getLastClicked}/>
      </div>
    );
  }
}

export default App;
