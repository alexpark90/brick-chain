var VaccineERC721 = artifacts.require('./VaccineERC721.sol')

module.exports = function (deployer) {
  deployer.deploy(VaccineERC721, { gas: 5000000 })
};
