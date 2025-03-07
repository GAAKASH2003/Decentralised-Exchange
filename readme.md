# Decentralized Exchange using Aave Protocol & Hardhat

## Overview

This project implements a decentralized exchange (DEX) contract utilizing the Aave protocol and Hardhat for deployment and testing. It allows users to interact with Aave's lending pool, deposit WETH, borrow DAI, and repay the borrowed amount.

## Features

- Depositing WETH into Aave's lending pool
- Borrowing DAI against WETH collateral
- Repaying the borrowed DAI
- Fetching user borrowing data
- Retrieving the DAI/ETH price using Chainlink price feeds

## Technologies Used

- Solidity
- Hardhat
- Aave Protocol
- Chainlink Price Feeds
- Ethers.js

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [Metamask](https://metamask.io/)
- [Alchemy/Infura RPC URL](https://www.alchemy.com/)

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/aave-dex.git
   cd aave-dex
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```env
   MAINNET_RPC_URL=your_mainnet_rpc_url
   SEPOLIA_RPC_URL=your_sepolia_rpc_url
   PRIVATE_KEY=your_private_key
   ETHERSCAN_API_KEY=your_etherscan_api_key
   COINMARKETCAP_API_KEY=your_coinmarketcap_api_key
   ```

## Contracts & Functions

### `main.js`

This script orchestrates interactions with Aave’s lending pool.

- **`getLendingPool(account)`**: Retrieves the lending pool contract instance.
- **`approveErc20(erc20Address, spenderAddress, amount, account)`**: Approves ERC-20 tokens for spending.
- **`borrowDai(daiAddress, lendingPool, amountDaiToBorrow, account)`**: Borrows DAI from the Aave protocol.
- **`getDaiPrice()`**: Fetches the latest DAI/ETH price using Chainlink.
- **`repay(amount, daiAddress, lendingPool, account)`**: Repays the borrowed DAI.
- **`getBorrowUserData(lendingPool, account)`**: Retrieves user's borrowing details.

### `getWeth.js`

This script helps in acquiring WETH from the WETH contract.

- **`getWeth()`**: Deposits ETH into the WETH contract and gets WETH in return.

## Running the Project

To run the script:

```sh
yarn hardhat run scripts/aaveBorrow.js
```

## Deployment

To deploy the contracts:

```sh
yarn hardhat deploy
```

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues or pull requests to improve the project.
