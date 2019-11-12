import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<header id="header" className="alt" />
    );
  }
}


AdminDashboard.propTypes = {
  actions: PropTypes.shape({
  })
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);
