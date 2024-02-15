require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    arbsep:{
      url:"https://arb-mainnet.g.alchemy.com/v2/H0wqCD6OjWsemTpX0ArGWRxIFMb78osD",
      accounts:["f9edc01096d1ab4dccab327d8472defd4020aaea9dd410ac85a9f9775f3d33ea"],
    }
  },

  etherscan: {
    apiKey:{
      arbsep: "QTZSVIY69YGWNUUHPVVMRPKUQ2CD2YV8TE",
    },
    customChains: [
      {
        network: "arbsep",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/"
        }
      }
    ]
  }
};
