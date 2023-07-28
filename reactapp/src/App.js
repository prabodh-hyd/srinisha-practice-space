import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wish from './components/Wish';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "sri" };
  }
  render() {
    return (
      <div className="App">
        <Wish name={this.state.name} />
      </div>
    );
  }
}

export default App;
