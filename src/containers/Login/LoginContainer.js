import React, { Component }   from 'react';
import { connect } from 'react-redux'
import LoginButton from './LoginButton'
import { loginUser, logoutUser } from '../../core/actions/actions-user'
import LogoutButton from './LogoutButton';


class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  mapButton(isLoggedIn) {
    if (isLoggedIn) {
      return <LogoutButton onClick={this.props.onLogoutClick}/>;
    } else {
      return (
        <div>
          <LoginButton onClick={this.props.onLoginUserClick}/>
        </div>
      );
    }
  }

  render() {
    return (
      this.mapButton(this.props.user.loggedInUser)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();
      dispatch(loginUser())
    },

    onLogoutClick: () => {
      event.preventDefault();
      dispatch(logoutUser())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
