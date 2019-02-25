import React, { Component } from 'react';
import logo from './logo.svg';
/*import axios from 'axios';*/
import googleBooksSearch from 'google-books-search';
import './App.css';
import marked from 'marked';

import BookAPI from './components/BookAPI';
/*import SearchBar from './components/searchBar'; /*import index.js from searchbar folder with <SearchBar/>*/

/*https://reactjs.org/docs/forms.html*/

/*##########################################################################*/

let bookList = [];
let books = require('google-books-search');
let options = {
  key: "AIzaSyBLIPF2e0Wg3PCzNfMLgx1W7nJL0l4TnXU",
  field: 'title',
  offset: 0,
  limit: 10,
  type: 'books',
  order: 'relevance',
  lang: 'en'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    books.search(this.state.value, options, function(error, results, apiResponse) {
      if ( ! error ) {
          console.log("Resuls are: ", results);
          let x = results;
          console.log("X Results are: ", results);
          bookList.push(x);
          console.log("bookList Resuls are: ", bookList);
          return <p>results</p>;

      } else {
          console.log(error);
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <div className="jumbotron">
      <h1 className="display-4">This a simple webpage to use the Google Books API.</h1>
      </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="d-flex justify-content-center h-100">
          <form onSubmit={this.handleSubmit}>
            <div className="searchbar">
            <input type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="search_input"
            placeholder="Search..."
            />
            <input type="submit" value="Submit" />
            <a href="#" className="search_icon"></a>
            </div>
            </form>
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
