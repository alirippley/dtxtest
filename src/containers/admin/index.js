import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import LoginForm from './login-form';
import Dashboard from './dashboard';

export class Main extends Component {
    componentDidMount() {
        this.props.actions.initializeApplication();
    }
  render() {
      const { authenticated } = this.props;
      return (
        <div className="admin-page">
          {authenticated ?
            <Dashboard />
            :
            <LoginForm authenticate={this.props.actions.authenticate} />
          }
        </div>
      );
  }
}

Main.propTypes = {
  actions: PropTypes.shape({
    initializeApplication: PropTypes.func
  })
};

function mapStateToProps(state) {
  return {
    authenticated: state.authenticate.admin
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
