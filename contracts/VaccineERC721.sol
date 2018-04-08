pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
//import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

//contract VaccineERC721 is ERC721Token, Ownable {
contract VaccineERC721 is ERC721Token {
  string constant public NAME = "VACCINE";
  string constant public SYMBOL = "EVAC";
  //string public NAME;

      struct VaccineInfo {
        uint256 vaccineId;
        string name;
        string dateTaken;
        string validUntil;
    }

    struct TransactionInfo{
    uint256 vaccineId;

    string name;
    string dateTaken;
    string validUntil;
    address doctorId;
    address patientId;

    }

    // VaccineInfo  public myVaccineinfo ;

  //   TransactionInfo myTransactionInfo;


  uint256 constant public PRICE = .000 ether;

  mapping(uint256 => uint256) tokenToPriceMap;
  mapping(uint256 => TransactionInfo) transactionInfoMap;

  function VaccineERC721() public {

  }




/*
  function getVaccineId() public view returns(uint256) {
    return myVaccineinfo.vaccineId;
  }

  function getName() public view returns(string) {
    return myVaccineinfo.name;
  }
  function getdDateTaken() public view returns(string) {
    return myVaccineinfo.dateTaken;
  }
  function getValidUntil() public view returns(string) {
    return myVaccineinfo.validUntil;
  }
*/

  function getSymbol() public pure returns(string) {
    return SYMBOL;
  }


  function createAndTransfer(uint256 _vaccineId, string _name,
  string _dateTaken, string _validUntil, address _recipientAddress) public payable  {
    require(msg.value >= PRICE);

    VaccineInfo memory  _myVaccineInfo = VaccineInfo(_vaccineId,_name,_dateTaken,_validUntil);
    TransactionInfo memory _myTransactionInfo = TransactionInfo(
    _vaccineId,_name,_dateTaken,_validUntil, msg.sender, _recipientAddress);
  ///  myVaccineinfo.vaccineId = _vaccineId;
  ///  myVaccineinfo.name = _name;
  ///  myVaccineinfo.dateTaken = _dateTaken;
  ///  myVaccineinfo.validUntil = _validUntil;
    ///fooStruct myStruct = fooStruct(1,2);


    _mint(msg.sender, _vaccineId);
    Transfer(msg.sender, _recipientAddress, _vaccineId);
  //  transfer(_recipientAddress, _vaccineId);
    tokenToPriceMap[_vaccineId] = PRICE;
    transactionInfoMap[_vaccineId] =_myTransactionInfo;

///    if (msg.value > PRICE) {
///      uint256 priceExcess = msg.value - PRICE;
///      msg.sender.transfer(priceExcess);
///    }
  }

/*
  function transferToDoctor(uint256 _vaccineId, string _name, string _dateTaken, string _validUntil) public payable  {
    require(msg.value >= PRICE);
    myVaccineinfo.vaccineId = _vaccineId;
    myVaccineinfo.name = _name;
    myVaccineinfo.dateTaken = _dateTaken;
    myVaccineinfo.validUntil = _validUntil;
    ///fooStruct myStruct = fooStruct(1,2);
    _mint(msg.sender, _vaccineId);
    tokenToPriceMap[_vaccineId] = PRICE;

    if (msg.value > PRICE) {
      uint256 priceExcess = msg.value - PRICE;
      msg.sender.transfer(priceExcess);
    }
  }


  function transferToPatient(uint256 _vaccineId, string _name, string _dateTaken, string _validUntil,
      address _patientAddress) public payable  {
    require(msg.value >= PRICE);
    myVaccineinfo.vaccineId = _vaccineId;
    myVaccineinfo.name = _name;
    myVaccineinfo.dateTaken = _dateTaken;
    myVaccineinfo.validUntil = _validUntil;
    ///fooStruct myStruct = fooStruct(1,2);
    _mint(_patientAddress, _vaccineId);
  ///  tokenToPriceMap[_vaccineId] = PRICE;

    if (msg.value > PRICE) {
      uint256 priceExcess = msg.value - PRICE;
      msg.sender.transfer(priceExcess);
    }
  }
*/
/*
  function mint(uint256 _vaccineId, string _name, string _dateTaken, string _validUntil) public payable  {
    require(msg.value >= PRICE);
    myVaccineinfo.vaccineId = _vaccineId;
    myVaccineinfo.name = _name;
    myVaccineinfo.dateTaken = _dateTaken;
    myVaccineinfo.validUntil = _validUntil;
    ///fooStruct myStruct = fooStruct(1,2);
    _mint(msg.sender, _vaccineId);
    tokenToPriceMap[_vaccineId] = PRICE;

    if (msg.value > PRICE) {
      uint256 priceExcess = msg.value - PRICE;
      msg.sender.transfer(priceExcess);
    }
  }

*/
  function claim(uint256 vaccineId) public payable onlyMintedTokens(vaccineId) {
    uint256 askingPrice = getClaimingPrice(vaccineId);
    require(msg.value >= askingPrice);
 ///   clearApprovalAndTransfer(ownerOf(vaccineId), msg.sender, vaccineId);
    tokenToPriceMap[vaccineId] = askingPrice;
  }

  function getClaimingPrice(uint256 vaccineId) public view onlyMintedTokens(vaccineId) returns(uint256){
    uint256 currentPrice = tokenToPriceMap[vaccineId];
    uint256 askingPrice = (currentPrice * 50) / 100;
    return askingPrice;
  }

  modifier onlyMintedTokens(uint256 vaccineId) {
    require (tokenToPriceMap[vaccineId] != 0);
    _;
  }
}
