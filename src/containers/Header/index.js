import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router-dom';
import { appConfig }          from 'core/configs/config-app';
import AppBar                 from 'components/AppBar';

/* actions */
import * as uiActionCreators  from 'core/actions/actions-ui';

/* component styles */
import { styles } from './styles.scss';

class Header extends Component {
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
          <AppBar
            title={appConfig.name}
            onLeftIconButtonTouchTap={this.handleToggle} />
            <div>
              {this.props.ui.user.name}
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
