import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './search_bar.css';

class SearchBar extends Component {

  state = {
    search: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.search === "") {
      return;
    }

    this.props.history.push(`/search/users?search=${
      this.state.search.split(' ').join('_')
    }`);

    this.setState({
      search: "",
    });
  }

  handleChange = (e) => {
    this.setState({
      search: e.currentTarget.value,
    });
  }

  render() {
    return (
      <form className="search-bar"
        onSubmit={ this.handleSubmit }>
        <input className="search-bar-input"
          type="text"
          onChange={ this.handleChange }
          value={ this.state.search }
          placeholder="Search e.g Lisa Simpson, Sansa Stark">
        </input>
        <button className="search-bar-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
