import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Profiles from './components/Profiles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profiles />
      </div>
    );
  }
}

export default App;
