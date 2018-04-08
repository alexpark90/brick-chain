pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract VaccineERC721 is StandardToken{

string public name ='AlvesCoin';
string public symbol = 'ALVES';
uint8 public decimals = 2;
uint public INITIAL_SUPPLY= 12000;

struct TransactionInfo{
uint256 vaccineId;

string name;
string dateTaken;
string validUntil;
address doctorId;
address patientId;

}


    function VaccineERC721() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

    function createAndTransfer(uint256 _vaccineId, string _name,
    string _dateTaken, string _validUntil, address _recipientAddress) public payable  {
    //  require(msg.value >= PRICE);

      TransactionInfo memory _myTransactionInfo = TransactionInfo(
      _vaccineId,_name,_dateTaken,_validUntil, msg.sender, _recipientAddress);



  ///    if (msg.value > PRICE) {
  ///      uint256 priceExcess = msg.value - PRICE;
  ///      msg.sender.transfer(priceExcess);
  ///    }
    }


}
