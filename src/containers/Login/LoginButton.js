import React from 'react'

// Images
import uPortLogo from '../../assets/images/uport-logo.svg'
import {FontIcon, RaisedButton} from 'material-ui';

const styles = {
  button: {
    margin: 300,
    marginTop: 10
  },
  wrapper: {
    paddingTop: 300
  }
};

const LoginButton = ({ onClick }) => {
  return(
    <div style={styles.wrapper}>
      <svg id="circle" height="60" width="200">
        <image x="0" y="0" height="60" width="200"  xlinkHref="uport-logo.svg" />
      </svg>
      <br />
      <RaisedButton
        label="Login With UPort"
        secondary={true}
        style={styles.button}
        icon={<FontIcon src={uPortLogo} />}
        onClick={onClick}
      />
    </div>
  )
};

export default LoginButton
