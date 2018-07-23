import React from 'react';

import WelcomeContainer from './welcome_container';
import SignupForm from './signup_form';
import PostForm from '../posts/post_form';
import NewsFeedContainer from './news_feed_container';
import MyLinks from './my_links';
import RecentNewsContainer from './recent_news_container';

class Main extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(newProps) {
    if(!newProps.currentUser) {
      window.scrollTo(0,0);
    }
  }

  render() {
    if(this.props.currentUser) {
      return (
        <div className="news-feed">
          <MyLinks currentUser={ this.props.currentUser }/>

          <div>
            <PostForm
              currentUser={ this.props.currentUser }
              createPost={ this.props.createPost }
              createPostPicture={ this.props.createPostPicture }/>

            <NewsFeedContainer />
          </div>

          <RecentNewsContainer />
        </div>
      );
    } else {
      return (
        <div className="main">
          <WelcomeContainer />

          <SignupForm signup={ this.props.signup }
            errors={ this.props.errors }/>
        </div>
      );
    }
  }
}

export default Main;
