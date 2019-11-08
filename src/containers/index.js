import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import { NavLink } from "react-router-dom";

// import { initializeApplication } from '../actions';
// import FuelSavingsForm from '../FuelSavingsForm';

export class Main extends React.Component {
    componentDidMount() {
        this.props.actions.initializeApplication();
    }
  render() {
    return (
    <div>
      <NavLink to="/single-page">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </div>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.shape({
    initializeApplication: PropTypes.func
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
)(Main);
