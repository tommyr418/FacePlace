import { connect } from 'react-redux';

import MainFooter from './main_footer';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(
  mapStateToProps,
  null
)(MainFooter);
