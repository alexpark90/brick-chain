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
import {VisibleOnlyDoctor, VisibleOnlyPatient} from '../../core/utils/wrappers';

class HomeViewContainer extends Component {
  constructor (props) {
    super(props);
  }

  handleChange = (value) => {
    this.props.actions.ui.switchTab(value);
  };

  render () {
    const DoctorView = VisibleOnlyDoctor(() =>
      <Tabs
        value={this.props.ui.selectedTab}
        onChange={this.handleChange} >
        <Tab label="Create Vaccine Record" value="createVacTab">
          <VaccineFormContainer />
        </Tab>
        <Tab label="View Vaccine History" value="viewVacHistoryTab">
          <VacHistoryContainer />
        </Tab>
      </Tabs>
    );

    const PatientView = VisibleOnlyPatient(() =>
      <div>
        <VacHistoryContainer />
      </div>
    );

    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <DoctorView />
        <PatientView />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    ui: state.ui
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
  connect(mapStateToProps, mapDispatchToProps)(HomeViewContainer)
)
