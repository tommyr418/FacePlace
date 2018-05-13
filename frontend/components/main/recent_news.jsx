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
    return (
      <div>
      </div>
    );
  }
}

export default RecentNews;
