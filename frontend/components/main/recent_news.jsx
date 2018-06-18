import React from 'react';

class RecentNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchCurrentNews().then(
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  render() {
    if (this.state.loading) {
      return null;
    }

    const articleLinks = this.props.news.articles.map((article, index) => {
      return (
        <li key={ index }>
          <a href= {article.url } target="_blank">
            <span>{ article.title }</span>
            <span className='news-source' >{ article.source.name }</span>
          </a>
        </li>
      );
    });

    return (
      <div className="trending">
        <span className="trending-header">Trending News</span>

        <ul className='trending-list'>
          { articleLinks }
        </ul>

        <div id="news-api-credit">
          <span>Powered by</span>
          <a href="https://newsapi.org/" target="_blank">News Api</a>
        </div>
      </div>
    );
  }
}

export default RecentNews;
