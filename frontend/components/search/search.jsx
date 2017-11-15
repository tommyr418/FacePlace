import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const search = this.props.location.search.split("=")[1];
    this.props.searchUsers(search);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.search !== this.props.location.search) {
      const search = newProps.location.search.split("=")[1];
      this.props.searchUsers(search);
      window.scrollTo(0,0);
    }
  }

  render() {
    if (Object.keys(this.props.search).length === 0) {
      return null;
    }

    if (Object.keys(this.props.search).length === 1) {
      return (
        <div className="search">
          <div className="users-index">
            <span id="search-null">No results found</span>
          </div>
        </div>
      );
    }

    const copy = Object.assign({}, this.props.search);
    delete copy.completed;

    const results = Object.values(copy).map((user) => {
      return (
        <div className="user"
          key={ user.id }>
          <div>
            <img src={ user.image_url }/>
            <Link to={ `/users/${user.id}` }>
              { user.fname } { user.lname }
            </Link>
          </div>

          <div>
            <button>
              <i className="fa fa-user" aria-hidden="true"></i>
              Add friend
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="search">
        <div className="users-index">
          { results }
        </div>
      </div>
    );
  }
}

export default Search;
