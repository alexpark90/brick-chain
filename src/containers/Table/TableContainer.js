import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
 Table,
 TableBody,
 TableFooter,
 TableHeader,
 TableHeaderColumn,
 TableRow,
 TableRowColumn,
} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    vaccineId : '1',
    vaccineName : 'Dummy Vaccine Name',
    name: 'John Smith',
    date : "07/04/18",
    status: 'Employed',
  },
  {
    vaccineId : '2',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    vaccineId : '3',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    vaccineId : '4',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    vaccineId : '5',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    vaccineId : '6',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    vaccineId : '7',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Adam Moore',
    status: 'Employed',
  },
];

class TableContainer extends Component {
  state = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: false,
  selectable: true,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: true,
  height: '300px',
};

handleToggle = (event, toggled) => {
  this.setState({
    [event.target.name]: toggled,
  });
};

handleChange = (event) => {
  this.setState({height: event.target.value});
};
  // static propTypes = {
  //    : PropTypes.func
  // }
  render () {
    return (
      <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                  Vaccines
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The vaccineID">Vaccine ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The vaccineName">Vaccine Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{row.vaccineId}</TableRowColumn>
                  <TableRowColumn>{row.vaccineName}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
    )
  }
}
export default TableContainer
