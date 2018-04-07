import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router-dom';
import { Drawer, AppBar }     from 'material-ui';

/* component styles */
import { styles } from './styles.scss';

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

class LeftNavBar extends Component {
  constructor(props) {
    super(props);
    console.log('on leftNavBar', props);
  }

  closeNav=() => {
    this.props.actions.ui.closeLeftNav();
  }

  render() {
    return (
      <div className={styles} >
        <Drawer
          docked={false}
          disableSwipeToOpen={true}
          open={this.props.ui.leftNavOpen}
          onRequestChange={this.closeNav}>
          <AppBar title={this.props.ui.user.name} />
          <div id="left-nav-container">
            {this.props.ui.user.name}
          </div>
        </Drawer>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftNavBar));