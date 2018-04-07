import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { VacHistoryContainer } from 'containers'
/* component styles */
import { styles } from './styles.scss'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui'

class HomeViewContainer extends Component {
  constructor (props) {
    super(props)
  }

  onLoginClick () {
    // this.props.actions.ui.login()
  }

  render () {
    return (
      <div className={styles}>
        <div id='home-view'>
          <button onClick={this.onLoginClick}>Login!</button>
          <VacHistoryContainer />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default withRouter(
  connect(null, mapDispatchToProps)(HomeViewContainer)
)
