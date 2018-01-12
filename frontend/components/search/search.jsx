import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
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

  sendRequest(e) {
    this.props.sendRequest({
      requester_id: this.props.currentUser.id,
      recipient_id: e.currentTarget.getAttribute("data"),
    });
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
      let buttonText;

      if (this.props.currentUser.id === user.id) {
        buttonText = "You";
      } else if (this.props.currentUser.friends.includes(user.id)) {
        buttonText = "Friends";
      } else if (this.props.currentUser.outgoingRequests.includes(user.id)) {
        buttonText = "Request Sent";
      } else {
        buttonText = "Add friend";
      }

      return (
        <div className="user"
          key={ user.id }>
          <div>
            <Link to={ `/users/${user.id}` }>
              <img src={ user.image_url }/>
            </Link>
            <Link to={ `/users/${user.id}` }
              className="users-index-name">
              { user.fname } { user.lname }
            </Link>
          </div>

          <div>
            {
              buttonText === "Add friend"
              ?
              <button onClick={ this.sendRequest }
                data={ user.id }>
                <i className="fa fa-user" aria-hidden="true"></i>
                { buttonText }
              </button>
              :
              <button>
                <i className="fa fa-user" aria-hidden="true"></i>
                { buttonText }
              </button>
            }
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
