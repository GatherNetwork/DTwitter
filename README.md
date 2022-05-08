# DTwitter

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
cd decentratwitter
npm install
```

### 4. Connect gather testnet blockchain accounts to Metamask

- Copy private key of the addresses and import to Metamask
- Connect your MetaMask to gather testnet blockchain.


### 5. Run deploy script to migrate smart contracts

```
npx hardhat run scripts/deploy.js --network localhost
```

### 6. Run Tests

```
npx hardhat test
```

### 7. Launch Frontend

```
npm run start
```