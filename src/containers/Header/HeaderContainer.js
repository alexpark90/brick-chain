import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router-dom';
// import { appConfig }          from 'core/configs/config-app';
import { AppBar as MuiAppBar } from 'material-ui';

/* actions */
import * as uiActionCreators  from 'core/actions/actions-ui';

/* component styles */
import { styles } from './styles.scss';
import LoginContainer from '../Login/LoginContainer';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  loggedInUser = this.props.user.loggedInUser;

  handleToggle =() => {
    this.props.actions.ui.openLeftNav();
  };

  render() {
    return (
      <div className={styles}>
        <header>
          <MuiAppBar
            title={this.loggedInUser ? this.loggedInUser.name + ' ' + this.loggedInUser.address : ''}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<LoginContainer />}
            iconElementLeft={<svg id="circle" height="60" width="200">
              <image x="0" y="0" height="60" width="200"  xlinkHref="eVaccine_color.svg" />
            </svg>}
          />
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
