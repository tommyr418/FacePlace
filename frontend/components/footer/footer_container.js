import { connect } from 'react-redux';

import Footer from './footer';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(
  mapStateToProps,
  null
)(Footer);
