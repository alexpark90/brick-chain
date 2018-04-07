import { connect } from 'react-redux'
import LoginButton from './LoginButton'
import { loginUser } from '../../core/actions/actions-user'

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();
      dispatch(loginUser())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
