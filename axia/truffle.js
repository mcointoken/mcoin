const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const web3 = new Web3();

module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*" // Match any network id
      },
      rinkeby: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        sender: "0xa18dd975b55a9592fa57d17bce502aff06d0e010", // default address to use for any transaction Truffle makes during migrations
        network_id: 4,
        gas: 4612388 // Gas limit used for deploys
      },
      live: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0xf3e1e474219a9789e5d59d0331ade8b777a5be96",
        network_id: '1',
        gasPrice:   75000000000,
        gas:        5721975      
      }
    }
  };