import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

class DashboardLink extends Component {
  render () {
    return (
      <div>test</div>
    )
  }
}
class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-dashboard">
        <div className="dashboard-container">
          <div className="nav">
            <DashboardLink />
            <DashboardLink />
            <DashboardLink />
            <DashboardLink />
          </div>
        </div>
      </div>

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
