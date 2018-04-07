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
import LoginButton from './LoginButton';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    console.log('props = ', props);
    this.state = {
      name : props.ui.user.name
    }
  }

  handleToggle=() => {
    this.props.actions.ui.openLeftNav();
  }

  render() {
    return (
      <div className={styles}>
        <header>
          <MuiAppBar
            title={this.props.ui.user.name}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<LoginButton />}
          />
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
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
