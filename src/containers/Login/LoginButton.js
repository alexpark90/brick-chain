import React from 'react'

// Images
import uPortLogo from '../../assets/images/uport-logo.svg'
import {FontIcon, RaisedButton} from 'material-ui';

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <RaisedButton
      label="Login With UPort"
      primary={true}
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      onClick={onLoginUserClick}
    />
  )
};

export default LoginButton
