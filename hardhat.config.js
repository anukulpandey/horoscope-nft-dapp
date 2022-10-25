require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'maticTestnet',
   networks: {
     hardhat: {},
     maticTestnet: {
         url: process.env.API_URL_KEY,
         accounts: [`0x${process.env.PRIVATE_KEY}`]
     }
   }
};
