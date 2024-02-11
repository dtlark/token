var TokenContract = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(TokenContract, 1000, "Dogcoin", "DOG", 10);
};