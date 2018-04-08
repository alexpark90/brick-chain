import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router-dom';
import { Drawer, AppBar }     from 'material-ui';

/* component styles */
import { styles } from './styles.scss';

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

class LeftNavBarContainer extends Component {
  constructor(props) {
    super(props);
  }

  closeNav = () => {
    this.props.actions.ui.closeLeftNav();
  };

  render() {
    return (
      <div className={styles} >
        <Drawer
          docked={false}
          disableSwipeToOpen={true}
          open={this.props.ui.leftNavOpen}
          onRequestChange={this.closeNav}>
          <AppBar title='Drawer' />
          <div id="left-nav-container">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftNavBarContainer));
