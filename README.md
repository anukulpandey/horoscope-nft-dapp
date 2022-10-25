# Mint Horoscope NFT

Hey !

Firstly connect your metamask with this dapp & after that you need to select your birthdate. It will mint the token for that zodiac sign . As simple as that.

![Alt text](https://raw.githubusercontent.com/anukulpandey/horoscope-nft-dapp/main/public/Screenshot_20221025_131738.png "a title")

## For Developers

```solidity
//clone this repository
git clone https://github.com/anukulpandey/horoscope-nft-dapp web3dapp

//change directory 
cd web3dapp 

//add environment variables in .env file

//Install all dependencies
npm install

//run the dapp
npm start
```

You can use any network you want. Here I have used polygon testnet.

I got my endpoint from 

[QuickNode - Blockchain API and Node Infrastructure | Ethereum, Solana, Polygon, BSC + More](https://www.quicknode.com/)

No need to change any other configuration , just make a .env file with the following :

```solidity
PRIVATE_KEY = YOUR_ACCOUNT_PRIVATE_KEY
API_URL_KEY = YOUR_API_URL
```

You can get your account’s private key from the metamask wallet.

All the minted tokens can be viewed at 

[](https://testnets.opensea.io/account)
