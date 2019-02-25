import React, { Component } from 'react';
import axios from 'axios';


export default class searchBar extends Component{

  render(){
  return (
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
        <input className="search_input" type="text" name="bookquery" onChange={this.handleChange} placeholder="Search..." />
        <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
    );
}
}
