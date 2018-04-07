import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import Formsy from 'formsy-react'
import Paper from 'material-ui/Paper'
import { FormsyText } from 'formsy-material-ui/lib'

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
      canSubmit: false

    }
  }
  handleSubmit = () => {
    this.setState({ submitted: true })
  }

  enableButton = () => {
    this.setState({ canSubmit: true })
  }

  disableButton = () => {
    this.setState({ canSubmit: false })
  }

  notifyFormError (data) {
    console.error('Form error:', data)
  }

  render () {
    let { paperStyle, margin32 } = styles
    return (
      <div>
        {this.state.submitted ? <div>Submitted!</div> : null}
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.handleSubmit}
            onInvalidSubmit={this.notifyFormError}>
            <FormsyText
              name='account'
              required
              hintText="patient's account address"
              floatingLabelText="Patient's account"
            />
            <FormsyText
              name='vaccine'
              required
              hintText='vaccine id'
              floatingLabelText='Vaccine Id' />
            <FormsyText
              name='dosage'
              type="number"
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
            <DatePicker 
              name='validUntil'
              hintText="Valid Until" 
              openToYearSelection={true} 
              floatingLabelText="Valid Until"
            />
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
