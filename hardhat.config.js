require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const URL = process.env.URL;
const PK = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      chainId: 80001,
      url: URL,
      accounts: PK !== undefined ? [PK] : [],
    },
  },
};
