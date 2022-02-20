require("@nomiclabs/hardhat-waffle");

const {
  ALCHEMY,
  PRIVATE_KEY
} = require('./config');

module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY}`,
      accounts: [PRIVATE_KEY],
		}
  }
};