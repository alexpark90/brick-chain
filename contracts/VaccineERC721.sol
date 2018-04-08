pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol';

contract VaccineERC721 is ERC721BasicToken{

string public name ='VaccineCoin';
string public symbol = 'EVAC';

struct TransactionInfo{
    uint256 vaccineId;
    string name;
    string dateTaken;
    string validUntil;
    address doctorId;
      address patientId;

}

mapping(uint256 => TransactionInfo) public transactionInfoMap;

    function VaccineERC721() public {
    //    totalSupply_ = INITIAL_SUPPLY;
    //    balances[msg.sender] = INITIAL_SUPPLY;
    }

    function createAndTransfer(uint256 _vaccineId, string _name,
    string _dateTaken, string _validUntil, address _recipientAddress) public payable  {
    //  require(msg.value >= PRICE);

      TransactionInfo memory _myTransactionInfo = TransactionInfo(
      _vaccineId,_name,_dateTaken,_validUntil, msg.sender, _recipientAddress);

      Transfer(msg.sender, _recipientAddress, _vaccineId);
      transactionInfoMap[_vaccineId] =_myTransactionInfo;

    }
    function getTokenAtIndex(uint256 _index) returns (TransactionInfo)  {
        return transactionInfoMap[_index];
    }


}
