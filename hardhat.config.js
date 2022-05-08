require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv').config();
const gatherPrivateKey = process.env.gatherPrivateKey;

module.exports = {
  solidity: "0.8.4",
  networks: {
    gather_testnet: {
     url: "https://testnet.gather.network",
     accounts: [process.env.gatherPrivateKey],
     port: 80,
     network_id: "*",
    },
    gather: {
      url: "https://mainnet.gather.network",
      accounts: [process.env.gatherPrivateKey],
      port: 80,
      network_id: "*",
     },
  },
};
