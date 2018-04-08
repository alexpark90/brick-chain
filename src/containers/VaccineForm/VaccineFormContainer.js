import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import Formsy from 'formsy-react'
import Paper from 'material-ui/Paper'
import { FormsyText } from 'formsy-material-ui/lib'
import MenuItem from 'material-ui/MenuItem';
import { vaccineList } from 'assets/mock_data/vaccineList'
import { patientList } from 'assets/mock_data/patientList'
import { web3 } from 'core/utils/connectors'

const styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20
  },
  switchStyle: {
    marginBottom: 16
  },
  margin32: {
    marginTop: 32
  }
}



class VaccineFormContainer extends Component {
  // static propTypes = {
  //   : PropTypes.func
  // }
  constructor (props) {
    super(props)
    this.state = {
      submitted: false,
      canSubmit: false,
      vaccine: '',
      patient: '',
    }


  }
  handleSubmit = () => {
    web3
    this.setState({ submitted: true })
  }

  enableButton = () => {
    this.setState({ canSubmit: true })
  }

  disableButton = () => {
    this.setState({ canSubmit: false })
  }

  handleVaccineChange = (event, index, value) => {
    this.setState({ vaccine: value });
    console.log(`Selected Vaccine: ${value}`);
  }

  handlePatientChange = (event, index, value) => {
    this.setState({ patient: value });
    console.log(`Selected Patient: ${value}`);
  }
  
  notifyFormError (data) {
    console.error('Form error:', data)
  }

  render () {
    let { paperStyle, margin32 } = styles
    const vaccines = [];
    const patients = []
    for (let i = 0; i < vaccineList.length; i++ ) {
      vaccines.push(<MenuItem value={vaccineList[i]} key={vaccineList[i].IntId} primaryText={vaccineList[i].Name} />);
    }

    for (let i = 0; i < patientList.length; i++ ) {
      patients.push(<MenuItem value={patientList[i]} key={patientList[i].ID} primaryText={`${patientList[i]['First Name']} ${patientList[i]['Last Name']}`} />);
    }
    

    return (
      <div>
        {this.state.submitted ? <div>Submitted!</div> : null}
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.handleSubmit}
            onInvalidSubmit={this.notifyFormError}>
            <SelectField
              name='patient'
              required
              hintText='Patient'
              floatingLabelText="Patient"
              value={this.state.patient}
              onChange={this.handlePatientChange}
              maxHeight={200}
            >
               {patients}
            </SelectField>
            <SelectField
              name='vaccine'
              required
              hintText='vaccine id'
              floatingLabelText="Vaccine"
              value={this.state.vaccine}
              onChange={this.handleVaccineChange}
              maxHeight={200}
            >
               {vaccines}
            </SelectField>
            <FormsyText
              name='dosage'
              value={this.state.vaccine.Dosage}
              required
              hintText="Administered Dosage of the Vaccine"
              floatingLabelText="Dosage"
            />
            <DatePicker 
              name='date'
              hintText="Date Administered" 
              defaultDate={new Date() }
              floatingLabelFixed={true}
              floatingLabelText="Date Administered"
            />
            <FormsyText
              name='dosage'
              value={this.state.vaccine['Valid Until']}
              required
              hintText="Administered Dosage of the Vaccine"
              floatingLabelText="Dosage"
            />
            {/* <DatePicker 
              name='validUntil'
              hintText="Valid Until" 
              defaultDate={new Date(this.state.vaccine['Valid Until']) }
              openToYearSelection={true} 
              floatingLabelText="Valid Until"
            /> */}
            <RaisedButton
              style={margin32}
              primary={true}
              type='submit'
              label='Submit'
              disabled={!this.state.canSubmit} />
          </Formsy.Form>
        </Paper>
      </div>
    )
  }
}
export default VaccineFormContainer
