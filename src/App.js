import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="jumbotron">
      <h1 class="display-4">This a simple webpage to use the Google Books API.</h1>
      </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
        <input class="search_input" type="text" name="" placeholder="Search..." />
        <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>

          <p>
            Enter the book name
          </p>

        </header>
      </div>
    );
  }
}

export default App;
