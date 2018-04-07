import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { VacHistoryContainer, VaccineFormContainer } from 'containers'
/* component styles */
import { styles } from './styles.scss'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui'
import {Tab, Tabs} from 'material-ui/Tabs/index';

class HomeViewContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'createVacTab'
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
  };

  render () {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange} >
        <Tab label="Create Vaccine Record" value="createVacTab">
          <VaccineFormContainer />
        </Tab>
        <Tab label="View Vaccine History" value="viewVacHistoryTab">
          <VacHistoryContainer />
        </Tab>
      </Tabs>
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
