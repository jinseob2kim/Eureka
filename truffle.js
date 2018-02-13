module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
     ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     from: "0x662e52853f9832fc988E47B9a1F942f0ba06FF6e",
     gas:   2900000
    },
    rinkeby: {
      network_id: 4,
      host: "localhost",
      port: 8545,
      from: "0x662e52853f9832fc988E47B9a1F942f0ba06FF6e",
      gas: 4000000
    },
    rpc: {
 host: 'localhost',
 post:8080
   }
  }
};
