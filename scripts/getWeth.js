const { getNamedAccounts, ethers } = require("hardhat");

const AMOUNT = ethers.utils.parseEther("0.005");
async function getWeth() {
  const { deployer } = await getNamedAccounts();
  console.log(`Deployer address: ${deployer}`);

  const iWeth = await ethers.getContractAt(
    "IWeth",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    deployer
  );

  console.log("Contract instance created");

  const tx = await iWeth.deposit({ value: AMOUNT });
  await tx.wait(1);
  console.log("Deposit transaction confirmed");

  const wethBalance = await iWeth.balanceOf(deployer);
  console.log(`Got ${wethBalance.toString()} WETH`);
}

module.exports = { getWeth, AMOUNT };
