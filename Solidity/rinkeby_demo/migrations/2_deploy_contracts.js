const Zazzle = artifacts.require("Zazzle");

module.exports = function(deployer) {
    deployer.deploy(Zazzle);
};