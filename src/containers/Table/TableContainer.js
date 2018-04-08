import React, { Component } from 'react'
import {
 Table,
 TableBody,
 TableHeader,
 TableHeaderColumn,
 TableRow,
 TableRowColumn,
} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import TruffleContract from 'truffle-contract';
import web3 from '../../web3';

const styles = {
  propContainer: {
    width: 200,
    // overflow: 'hidden',
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
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
  {
    vaccineId : '2',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Randal White',
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
  {
    vaccineId : '3',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Stephanie Sanders',
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
  {
    vaccineId : '4',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Steve Brown',
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
  {
    vaccineId : '5',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Joyce Whitten',
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
  {
    vaccineId : '6',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Samuel Roberts',
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
  {
    vaccineId : '7',
    vaccineName : 'Dummy Vaccine Name',
    name: 'Adam Moore',
    address: '0x09b8d82f98c05de2436684e0f5050afea5c831d5',
    dateAdministered: '31/04/12',
    dateVaccine: '01/01/13',
  },
];

class TableContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '500px',
      id: 1,
      contracts: {}
    };
    this.initContract();
  }


  initContract = () => {
    fetch('/contracts/VaccineERC721.json')
      .then((res) => {
        return res.json()})
      .then((res) => {
        console.log(res)

        var VaccineERC721 = TruffleContract(res)
        VaccineERC721.setProvider(web3.currentProvider)
        // console.log(VaccineERC721)

        var instance;

        web3.eth.getAccounts( (error, accounts) => {
          if (error) {
            console.log(error)
          }

          console.log('acc' + accounts)

          var account = accounts[0];

          VaccineERC721.deployed().then((inst) => {
            instance = inst;

            console.log('instance :', instance.transactionInfoMap[0]);

          });
        })

      })
  };
//
// handleToggle = (event, toggled) => {
//   this.setState({
//     [event.target.name]: toggled,
//   });
// };
//
// handleChange = (event) => {
//   this.setState({height: event.target.value});
// };
//
// search = (event) => {
//   this.setState({id: event.target.value});
// };

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
                <TableHeaderColumn colSpan="5" tooltip="Super Header" style={{textAlign: 'center'}}>
                  <div style={styles.propContainer}>
                    <TextField
                      floatingLabelText="Search ID"
                      onChange={this.state.search}
                    />
                </div>
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The vaccineID">Vaccine ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The vaccineName">Vaccine Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Patient Address">Patient Address</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Vaccine Administration">Vaccine Administration</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Vaccine Expiration">Vaccine Expiration</TableHeaderColumn>
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
                  <TableRowColumn>{row.address}</TableRowColumn>
                  <TableRowColumn>{row.dateAdministered}</TableRowColumn>
                  <TableRowColumn>{row.dateVaccine}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
    )
  }
}
export default TableContainer
