import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './search_bar.css';

class SearchBar extends Component {

  state = {
    search: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.search === "") {
      return;
    }

    this.props.history.push(`/search/users?search=${
      this.state.search.split(' ').join('_')
    }`);
    e.currentTarget.children[0].value = "";
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
      <form onSubmit={ this.handleSubmit }>
        <input type="text" id="search-bar"
          onChange={ this.handleChange }
          defaultValue="Search here for Simpsons, Game of Thrones characters"
          onBlur={ this.handleBlur }
          onFocus={ this.handleFocus }>
        </input>
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
