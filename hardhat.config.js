require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
const process = require("process");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.13",
      },
      {
        version: "0.7.0",
        settings: {},
      },
    ],
  },
  networks: {
    polygonmumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
