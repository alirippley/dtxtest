import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
    console.log('123', this.password.value)
    this.props.authenticate({name: this.input.value, password: this.password.value})
  }

  render() {
    return (
      <div className="admin-login">
        Please login with your admin account!!!
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <label>
            Password:
            <input type="text" ref={(password) => this.password = password} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


LoginForm.propTypes = {
  authenticate: PropTypes.func
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
