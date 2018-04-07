import React from 'react'

// Images
import uPortLogo from '../../assets/images/uport-logo.svg'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <div>
      <a href="#" onClick={(event) => onLoginUserClick(event)}>
        <img className="uport-logo" src={uPortLogo} alt="UPort Logo" />Login with UPort
      </a>
    </div>
  )
};

export default LoginButton
